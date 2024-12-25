import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import Ghost404 from '@/components/ui/ghost-404';

interface RedirectPageProps {
    params: { shortcode: string }
}

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }
const prisma = globalForPrisma.prisma ?? new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default async function RedirectPage({ params }: RedirectPageProps) {
    const { shortcode } = params;

    const url = await prisma.URL.findUnique({
        where: { shortCode: shortcode },
    });

    if (!url) {
        return <Ghost404 />;
    }

    await prisma.URL.update({
        where: {
            id: url.id
        },
        data: { visits: { increment: 1 } },
    });

    redirect(url.originalUrl);
}
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

// Remove duplicate interface
interface RedirectPageProps {
    params: {shortcode: string}
}

// Create a single PrismaClient instance
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }
const prisma = globalForPrisma.prisma ?? new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default async function RedirectPage({ params }: RedirectPageProps) {
    const {shortcode} = params;

    const url = await prisma.URL.findUnique({
        where: { shortCode: shortcode },
    });

    if(!url) {
        return <div> 404 - URL not found FUCK!! </div>
    }

    await prisma.URL.update({
        where: {
            id: url.id
        },
        data: { visits: {  increment: 1  } },
    });

    redirect(url.originalUrl);
}
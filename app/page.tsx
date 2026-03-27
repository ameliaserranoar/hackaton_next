import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';

function getRouteFolders() {
    const appDirectory = path.join(process.cwd(), 'app');

    return fs
        .readdirSync(appDirectory, { withFileTypes: true })
        .filter((entry) => {
            if (!entry.isDirectory()) {
                return false;
            }

            const pageFile = path.join(appDirectory, entry.name, 'page.tsx');
            return fs.existsSync(pageFile);
        })
        .map((entry) => ({
            name: entry.name,
            path: `/${entry.name}`,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
}

export default function Home() {
    const folders = getRouteFolders();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <h1 className="mb-8 text-4xl font-bold">Paginas</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {folders.map((folder) => (
                    <Link
                        key={folder.path}
                        href={folder.path}
                        className="rounded-lg bg-blue-600 px-6 py-3 text-center text-white transition hover:bg-blue-700"
                    >
                        {folder.name}
                    </Link>
                ))}
            </div>
        </main>
    );
}

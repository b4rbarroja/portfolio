-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "content" TEXT,
ADD COLUMN     "date" TEXT,
ADD COLUMN     "excerpt" TEXT,
ADD COLUMN     "readTime" TEXT;

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "read" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "subject" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "fullDescription" TEXT,
ADD COLUMN     "problem" TEXT,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "repoUrl" TEXT,
ADD COLUMN     "solution" TEXT,
ADD COLUMN     "tags" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT;

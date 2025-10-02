-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT,
    "year" INTEGER,
    "pages" INTEGER,
    "rating" INTEGER DEFAULT 0,
    "synopsis" TEXT,
    "cover" TEXT
);

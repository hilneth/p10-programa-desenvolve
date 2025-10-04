-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'QUERO_LER',
    "currentpage" INTEGER NOT NULL DEFAULT 0,
    "createdat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" DATETIME NOT NULL,
    "categoryid" INTEGER,
    "genre" TEXT,
    "year" INTEGER,
    "pages" INTEGER,
    "rating" INTEGER DEFAULT 0,
    "synopsis" TEXT,
    "cover" TEXT,
    "isbn" TEXT,
    CONSTRAINT "Book_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Book" ("author", "cover", "createdat", "currentpage", "genre", "id", "isbn", "pages", "rating", "status", "synopsis", "title", "updatedat", "year") SELECT "author", "cover", "createdat", "currentpage", "genre", "id", "isbn", "pages", "rating", "status", "synopsis", "title", "updatedat", "year" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

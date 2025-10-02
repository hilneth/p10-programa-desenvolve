/*
  Warnings:

  - Made the column `updatedat` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
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
    "genre" TEXT,
    "year" INTEGER,
    "pages" INTEGER,
    "rating" INTEGER DEFAULT 0,
    "synopsis" TEXT,
    "cover" TEXT,
    "isbn" TEXT
);
INSERT INTO "new_Book" ("author", "cover", "createdat", "currentpage", "genre", "id", "isbn", "pages", "rating", "status", "synopsis", "title", "updatedat", "year") SELECT "author", "cover", "createdat", "currentpage", "genre", "id", "isbn", "pages", "rating", "status", "synopsis", "title", "updatedat", "year" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

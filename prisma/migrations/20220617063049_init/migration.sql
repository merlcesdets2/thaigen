-- CreateTable
CREATE TABLE "stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "productCode" TEXT NOT NULL,
    "producDescription" TEXT,
    "status" TEXT NOT NULL,
    "remark" TEXT
);

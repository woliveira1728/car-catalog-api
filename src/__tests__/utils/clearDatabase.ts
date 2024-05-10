import { prisma } from "../../database/prisma"

beforeEach(async () => {
    await prisma.$transaction([
        prisma.car.deleteMany(),
        prisma.user.deleteMany()
    ]);
})
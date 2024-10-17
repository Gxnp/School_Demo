import { zValidator } from "@hono/zod-validator";
import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { z } from "zod";

const app = new Hono().basePath("/api");
const prisma = new PrismaClient();

app.use(cors());

app
  .post(
    "/application",
    zValidator(
      "form",
      z.object({
        title: z.string(),
        name: z.string(),
        nationalId: z.string(),
        dob: z.string(),
        age: z.string(),
        religion: z.string(),
        ethnicity: z.string(),
        nationality: z.string(),
        phone: z.string(),
        address: z.string(),
        previousSchool: z.string(), // โรงเรียนที่จบการศึกษา
        gpa: z.string(), // เกรดเฉลี่ย
        gradeApplyingFor: z.string(),
        profilePicture: z.string(),
      })
    ),
    async (c) => {
      const {
        title,
        name,
        nationalId,
        dob,
        age,
        religion,
        ethnicity,
        nationality,
        phone,
        address,
        previousSchool, // โรงเรียนที่จบการศึกษา
        gpa, // เกรดเฉลี่ย
        gradeApplyingFor,
        profilePicture,
      } = c.req.valid("form");

      console.log("Creating application for:", name);

      try {
        const newApplication = await prisma.application.create({
          data: {
            title,
            name,
            nationalId,
            dob,
            age,
            religion,
            ethnicity,
            nationality,
            phone,
            address,
            previousSchool, // โรงเรียนที่จบการศึกษา
            gpa, // เกรดเฉลี่ย
            gradeApplyingFor,
            profilePicture,
            status: "Passed", // กำหนดค่า status ที่นี่
          },
        });

        return c.json({ id: newApplication.id }, 201);
      } catch (error) {
        if (error instanceof Error) {
          return c.json({ error: error.message }, 500);
        }
        return c.json({ error: "An unexpected error occurred" }, 500);
      }
    }
  )
  .get(
    "/application/status/:nationalId",
    zValidator("param", z.object({ nationalId: z.string() })),
    async (c) => {
      const { nationalId } = c.req.valid("param");

      try {
        const data = await prisma.application.findUnique({
          where: {
            nationalId,
          },
        });

        if (!data) {
          return c.json({ status: "ไม่พบข้อมูลการสมัคร !" });
        }
        return c.json(data);
      } catch (error) {
        if (error instanceof Error) {
          return c.json({ error: error.message }, 500);
        }
        return c.json({ error: "An unexpected error occurred" }, 500);
      }
    }
  );

export default app;

import { Router } from "express";
import bcrypt from "bcryptjs";
import prisma from "../lib/prisma.ts";
import jwt from "jsonwebtoken";

const router = Router();

// Register route
router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return res.status(400).json({
            message: "Email already exists",
        });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            email,
            password: hashedPass,
        },
    });

    res.status(201).json({
        message: "User registered successfully",
    });
});

// Login route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        return res.status(400).json({
            message: "Invalid credentials",
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            message: "Invalid credentials",
        });
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        process.env.JWT_SECRET!,
        {
            expiresIn: "1h",
        }
    );

    res.json({ token });
});

// Protected route
router.get("/protected", (req, res) => {
    const authHeader = req.headers.authorization;

    const token = authHeader?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "No token provided",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);

        res.json({
            message: "Protected route",
            user: decoded,
        });
    } catch (error) {
        res.status(401).json({
            message: "Invalid token",
        });
    }
});

export default router;
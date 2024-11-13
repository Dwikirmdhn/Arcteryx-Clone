import { createUser, getUser } from "@/db/models/user"
import { NextResponse } from "next/server"
import { z } from "zod"

const userInputSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    username: z.string().min(1, { message: "Username cannot be empty" }),
    email: z.string().email({ message: "Must be a valid email format" }),
    password: z.string().min(5, { message: "Password must be at least 5 characters" })
})

type MyResponse<T> = {
    statusCode: number
    message?: string
    data?: T
    error?: string
}


export const GET = async () => {
    const users = await getUser()

    return Response.json({
        statusCode: 200,
        message: "Pong from GET /api/users !",
        data: users
    },
        {
            status: 200,
        },
    )
}

export const POST = async (request: Request) => {
    try {
        const data = await request.json()
        const parsedData = userInputSchema.safeParse(data)

        if (!parsedData.success) {
            throw parsedData.error
        }

        const user = await createUser(parsedData.data)

        return NextResponse.json<MyResponse<unknown>>(
            {
                statusCode: 201,
                message: "Pong from POST /api/users !",
                data: user
            },
            {
                status: 201,

            }
        )

    } catch (err) {
        if (err instanceof z.ZodError) {
            console.log(err);
            const erMessage = err.issues[0].message

            return NextResponse.json<MyResponse<never>>(
                {
                    statusCode: 400,
                    error: erMessage,
                },
                {
                    status: 400,
                }
            )
        }
        return NextResponse.json<MyResponse<never>>(
            {
                statusCode: 500,
                error: "Internal server error"
            },
            {
                status: 500,
            }
        )
    }
}
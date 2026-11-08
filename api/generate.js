export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Only POST requests are allowed"
        });
    }

    return res.status(200).json({
        message: "EDUVERSE AI Backend is ready for setup!"
    });
}

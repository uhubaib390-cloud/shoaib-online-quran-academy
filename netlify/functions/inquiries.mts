export default async (request: Request) => {
  if (request.method !== "POST") {
    return Response.json({ success: false, message: "Method not allowed" }, { status: 405 });
  }

  const payload = (await request.json()) as Record<string, unknown>;
  const type = typeof payload.type === "string" ? payload.type : "inquiry";
  const requiredFields = type === "contact"
    ? ["studentName", "email", "message"]
    : ["studentName", "email", "course", "timing", "teacherPreference"];
  const missing = requiredFields.filter(field => !payload[field] || String(payload[field]).trim() === "");

  if (missing.length > 0) {
    return Response.json({ success: false, message: "Please complete the required fields.", missing }, { status: 400 });
  }

  console.info("[Academy inquiry]", {
    type,
    studentName: payload.studentName,
    course: payload.course,
    createdAt: new Date().toISOString(),
  });

  return Response.json({ success: true, received: true, message: "Your request has been received." }, { status: 201 });
};

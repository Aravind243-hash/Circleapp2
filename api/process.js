export default function handler(req, res) {
  if (req.method === "POST") {
    const values = req.body?.arr || []; // Get array from request body
    const output = processArray(values); // Your processing function
    res.status(200).json({ score: output });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

function processArray(arr) {

    return arr[0][1];



}
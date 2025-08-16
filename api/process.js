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

    //return arr[0][1];
    let centroidx=0;
    let centroidy=0;
    let count=0;
    for(const point of arr)
    {
      count++;
      centroidx+=point[0];
      centroidy+=point[1];

    }
    if(count!=0){
    centroidx/=count;
    centroidy/=count;
    }
    
    let rm=0;
    for(const point of arr)
    {
      rm+=((point[0]-centroidx)*(point[0]-centroidx)+(point[1]-centroidy)*(point[1]-centroidy))**0.5;
    }
    if(count!=0)
    {
      rm/=count;
    }
    let r;
    let mad=0;
    for(const point of arr)
    {
      r=((point[0]-centroidx)*(point[0]-centroidx)+(point[1]-centroidy)*(point[1]-centroidy))**0.5;
      mad+=(Math.max((r-rm),(rm-r)));
    }
    if(count!=0 && rm!=0)
    {
      mad/=(count*rm);
    }
    else
      { mad=0;
      }
    return mad;



}
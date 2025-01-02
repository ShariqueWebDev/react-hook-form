// app/projec/page.tsx
const GetServerComponent = async () => {
  // Fetch data with revalidation every 60 seconds (ISR)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await res.json();

  console.log(data);
  

  return (
    <div>
      <h1>Fetched Data (Server-Side)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p className="">{data?.[0]?.body}</p>
    </div>
  );
};

export default GetServerComponent;

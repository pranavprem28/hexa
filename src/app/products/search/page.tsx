export default function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string }
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Search Results
      </h2>
      <p>Query: {searchParams.query}</p>
    </div>
  )
}
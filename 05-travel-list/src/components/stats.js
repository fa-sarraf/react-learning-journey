// statistics
export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items into your packing list 🚀...</em>
      </footer>
    );
  const numItems = items.length;
  //console.log(numItems);
  const numPacked = items.filter((item) => item.packed).length;
  //console.log(numPacked);
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything.Ready to go ✈"
          : `
          💼 You have ${numItems} items in your list, and you already packed ${" "}
          ${numPacked} (${percentage}%).
        `}
      </em>
    </footer>
  );
}

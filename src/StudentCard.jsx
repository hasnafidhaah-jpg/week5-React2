import Button from "./Button";

function StudentCard({ name, course, place, status = "Active" }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Place: {place}</p>
      <p>Status: {status}</p>

      <Button label="View Profile" variant="primary" />
      <Button label="Message" variant="secondary" />
    </div>
  );
}

export default StudentCard;
import { useSelector } from "react-redux";

export const Header = () => {
  const tasks = useSelector((state) => state.tasks.tasksList);
  const total = tasks.length;
  const done = tasks.filter((t) => t.isCompleted).length;
  const pending = total - done;
  const efficiency = total > 0 ? Math.round((done / total) * 100) : 0;

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Page header */}
      <header className="page-header" id="page-header">
        <div className="page-header__left">
          <h1>Inbox</h1>
          <p>{dateStr}</p>
        </div>
        <div className="page-header__right">
          <span className="page-header__remaining">
            {pending} Task{pending !== 1 ? "s" : ""} Remaining
          </span>
        </div>
      </header>

      {/* Stats row */}
      <section className="stats-row" id="stats-row">
        <div className="stat-block">
          <p className="stat-block__label">Completed</p>
          <p className="stat-block__value">{done}</p>
        </div>
        <div className="stat-block">
          <p className="stat-block__label">Pending</p>
          <p className="stat-block__value stat-block__value--error">{pending}</p>
        </div>
        <div className="stat-block">
          <p className="stat-block__label">Efficiency</p>
          <p className="stat-block__value">
            {efficiency}<span className="stat-block__unit">%</span>
          </p>
        </div>
      </section>
    </>
  );
};

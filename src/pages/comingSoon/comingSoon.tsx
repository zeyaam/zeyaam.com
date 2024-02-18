import "./comingSoon.scss";

export const ComingSoon = () => {
  return (
    <div className="gradient-bg">
      <div className="gradients-container">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
        <div className="gradient-4"></div>
        {/* <div className="gradient-5"></div> */}
      </div>
      <div className="app-main">
        <div>
          <header className="app-header">Coming soon</header>
          <div className="app-body">
            <div>(This website is under development ;) )</div>
          </div>
        </div>
      </div>
    </div>
  );
};

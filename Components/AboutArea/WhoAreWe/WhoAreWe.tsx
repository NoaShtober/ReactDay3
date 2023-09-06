import css from "./WhoAreWe.module.css";

function WhoAreWe(): JSX.Element {
    return (
        <div className="WhoAreWe">
			<p className={css.NiceText}>We are Northwind company...</p>
            <p>We are open 24/7!</p>
        </div>
    );
}

export default WhoAreWe;

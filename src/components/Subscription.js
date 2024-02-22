import './Subscription.css'
function Subscription() {
    let date =(new Date('2024','2','22'));
    let title="Monthly subscription";
    let amount='125.60'
    return (
        <div className="subscration">
            <div>{date.toISOString()}</div>
            <h2 className="subscration_title">{title}</h2>
            <div className='subscration_price'>{amount}</div>
        </div>

    )
}
export default Subscription
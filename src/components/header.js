import KataSyukurLogo from '../icons/logo.svg';

export default function Header() {
    return (
        <div className="syukur-app__header">
            <img src={KataSyukurLogo} alt="KataSyukur Logo" />
        </div>
    );
}
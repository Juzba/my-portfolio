import './Coordinate.scss';
import useFetch from '../../../components/hooks/useFetch';
import Loading from '../../../components/loading/Loading';
import issImg from '../../../../images/iss.png';
import { useEffect } from 'react';

const apiUrl = 'http://api.open-notify.org/iss-now.json';

interface IssPosition {
    latitude: number;
    longitude: number;
}

interface FetchData {
    iss_position: IssPosition;
}

const Coordinates = () => {
    const { data, refetch } = useFetch<FetchData>(apiUrl);

    useEffect(() => {
        const int1 = setInterval(() => {
            refetch();
        }, 2000);

        return () => clearInterval(int1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="coordinates">
            <img src={issImg} alt="" />
            <h2>Aktuální pozice vesmírné stanice ISS.</h2>
            {data ? (
                <div className="box">
                    <p>{`Zeměpisná šířka: ${data.iss_position.latitude}`}</p>
                    <p>{`Zeměpisná délka: ${data.iss_position.longitude}`}</p>
                </div>
            ) : (
                <div className="box loading">
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default Coordinates;

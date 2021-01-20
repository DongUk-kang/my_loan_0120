import React, {useState, useEffect} from 'react';
import axios from "axios";

const App = () => {

    //1. 데이터 담을공간
    const [loans, setLoans] = useState([])
    const [loading, setLoading] = useState(true)

    //3. 네트워킹

    const getData = async () => {
        return (
            await axios.get('https://api.kivaws.org/v1/loans/newest.json')
                // .then(res => console.log(res.data.loans))
                .then(res => {
                    setLoans(res.data.loans)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        )
    }


    //2. 자동실행 함수
    useEffect(() => {
        getData()
    }, [])

    //화면에 보여주는 부분 로딩화면 포함
    return (
        <>
            {loading ?
                <div>
                    <h1>
                        loading ....
                    </h1>
                </div>
                : (
                    <div>
                        {loans.map(loan => (
                            <>
                                <h1>Name : {loan.name}</h1>
                                <h2>Nation : {loan.location.country}</h2>
                                <h3>Amount : {loan.loan_amount}$</h3>

                            </>
                        ))}
                    </div>
                )
            }
        </>
    )
}





export default App;

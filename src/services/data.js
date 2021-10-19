export default class BankingService {
    getAccounts(){
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59");
        
        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        return fetch("https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data", requestOptions)
            .then(response => response.text())
            .then(result => {
                return JSON.parse(result).body
            })
            .catch(error => console.log('error', error));
    }
 }
import React from 'react';

class GoogleAuth extends React.Component{

    state = { isSignedIn : null};

    componentDidMount(){
        
        /* gapi brings additional js code from google library . it takes time . hece we add a callback function which is called after data is brought  */
        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({
                clientId: '622448670609-88mc0d9voijuibqhq9454j1numhu0hm4.apps.googleusercontent.com',
                scope : 'email'

            })
        
        .then(()=> {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({ isSignedIn : this.auth.isSignedIn.get()});
            /* When comp. is first rendered , issignedin value gets to yes or no  initially but when we signin or sign out
            issignedin.get ki value is not updated . hence we use issignedin.listen in to changes. */
            this.auth.isSignedIn.listen()
        });
    });
    }

    

    render(){
        return (
            <div>
                hi
            </div>
        )
    }
}

export default GoogleAuth;
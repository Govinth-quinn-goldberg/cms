import './Complaint.css';
function Complaint(){
    return(
        <div className="main">
            <div className='text'><h2>Welcome to the <span style={{color:"red"}}>Complaint page</span></h2>
            <p>Feel Free To Express Yourself<br></br><br/><q>Share your details and let us know your concers<br/>We value your feedack and are commited to resolve issues quickly.</q></p>

            </div>

            <div className='form'>
                <div className='form1'>
                <h2><i><span style={{color:"red"}}>Fill It Up</span></i></h2>
                <label for="name"><span style={{color:"red"}}>Name: </span></label>
                <input type="text" name='name'></input><br></br><br></br><br></br>

                <label for="regno"><span style={{color:"red"}}>Regno: </span></label>
                <input type="text" name='regno'></input><br></br><br></br><br></br>

                <label><span style={{color:"red"}}>Type/Category:</span></label>
                <select>
                    <option value="">Select a category</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="student">Student</option>
                    <option value="security">Security</option>
                    <option value="faculty">Faculty</option>
                    <option value="other">Other</option>
                </select><br></br><br></br><br></br>

                <label for="email"><span style={{color:"red"}}>Email: </span></label>
                <input type="email"></input><br></br><br></br><br></br>

                <label for="mea"><span style={{color:"red"}}>complaint: </span></label>
                <textarea row="4" cols="50" placeholder='explain your complaint here '></textarea><br></br><br></br><br></br>
                
                <button type='reset'>Reset</button>
                <button onClick={{}}>Submit</button>
                </div>                
            </div>
        
        </div>
    );
}
export default Complaint;
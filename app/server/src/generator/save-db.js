
function search_resume(search_term) {
}

function search_email(email) {
    var sql = "SELECT email FROM resumes WHERE email=${email}";
    db.query(sql, function (err, result) {
        if (err) {
            throw err;
        } else {
            return result;
        }
    });
}

 
function update_resume(resumeJSON) {

    resumeObj = JSON.parse(resumeJSON)
    email = resumeObj.basics.email
    name = resumeObj.basics.name
    studyArea = resumeObj.education.area


    result = search_email(email)
    var sql="";
    if(result) {
        // found existing email record, update the resume
        sql = "UPDATE `resumes` SET `name` = '" + name + "', `area` = '" + studyArea + "', `resume` = '" + resumeJSON + "' WHERE `email` = '" + email + "'";
    } else {
        // new email, insert record
        sql = "INSERT INTO `resumes` (email, name, area, resume) VALUES ('" + email + "', '" + name + "', '" + studyArea + "', '" + resumeJSON + "')";
    }

    
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record updated with email:" + email);
    });
}

export { search_resume, update_resume }
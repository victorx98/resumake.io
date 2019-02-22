
function search_email(email) {
    var sql = "SELECT email FROM resumes WHERE email='" + email + "'";
    console.log("Update SQL:")
    console.log(sql)
    db.query(sql, function (err, result) {
        if (err) {
            throw err;
        } else {
            return result;
        }
    });
}

 
function update_resume(resumeJSON) {

    console.log("INPUT JSON:")
    console.log(resumeJSON)

    var email = resumeJSON.basics.email
    var name = resumeJSON.basics.name
    var studyArea = resumeJSON.education[0].area
    var rJSON = JSON.stringify(resumeJSON)
    console.log("OUTPUT JSON:")
    console.log(rJSON)


    var result = search_email(email)
    var sql="";
    if(result) {
        // found existing email record, update the resume
        sql = "UPDATE `resumes` SET `name` = '" + name + "', `area` = '" + studyArea + "', `resume` = '" + resumeJSON + "' WHERE `email` = '" + email + "'";
    } else {
        // new email, insert record
        sql = "INSERT INTO `resumes` (email, name, major, resume) VALUES ('" + email + "', '" + name + "', '" + studyArea + "', '" + rJSON + "')";
    }

    console.log("Update SQL:")
    console.log(sql)

    
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record updated with email:" + email);
    });
}

export { search_email, update_resume }
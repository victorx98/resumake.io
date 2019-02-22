
function search_email(email,callback) {
    var sql = "SELECT email FROM resumes WHERE email='" + email + "'";
    console.log("Search SQL:")
    console.log(sql)
    db.query(sql, function (err, result) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}

 
function update_resume(resumeJSON) {

    if (!resumeJSON.basics.email)
        return;
    var email = resumeJSON.basics.email
    var name = resumeJSON.basics.name
    var studyArea = ""
    var rJSON = JSON.stringify(resumeJSON)

    if (resumeJSON.education)
        studyArea = resumeJSON.education[0].area;

    var parts = rJSON.split('\\')
    var eJSON = parts.join('\\\\')

    // var result = search_email(email)
    // console.log("Search result:")
    // console.log(result)

    search_email(email,function (err, result) {

        if (err) {
            console.log("Search email error with:" + email);
        } else {
            // body...
            var sql="";
            if(result) {
                // found existing email record, update the resume
                sql = "UPDATE `resumes` SET `name` = '" + name + "', `major` = '" + studyArea + "', `resume` = '" + eJSON + "' WHERE `email` = '" + email + "'";
            } else {
                // new email, insert record
                sql = "INSERT INTO `resumes` (email, name, major, resume) VALUES ('" + email + "', '" + name + "', '" + studyArea + "', '" + eJSON + "')";
            }

            console.log("Update SQL:")
            console.log(sql)

            
            db.query(sql, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("1 record updated with email:" + email);
                }
            });
        }
    })

}

export { search_email, update_resume }
router.get('/delete', function (req, res) {
    StudentModel.remove({ StudentId: 20 },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});
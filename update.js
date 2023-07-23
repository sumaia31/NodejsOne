router.post('/delete', function (req, res) {
    User.findByIdAndDelete((req.body.id),
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data Deleted!");
            }
        });
});
router.post('/update', function (req, res) {
    User.findByIdAndUpdate(req.body.id,
        { UserName: req.body.Name }, function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});
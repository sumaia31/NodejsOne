router.get('/findall', function (req, res) {
    User.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

router.get('/findfirst', function (req, res) {
    User.findOne({ StudentId: { $gt: 18 } },
        function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});
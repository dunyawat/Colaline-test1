const router = require('express').Router();
const Subject = require('../models/subject.model');


router.route('/').get((req, res)=>{
    Subject.find()
        .then(subjects => res.json(subjects))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const subjectName = req.body.subjectName;
    const score = Number(req.body.score);
    const credit = Number(req.body.credit);


    const newSubject = new Subject({
        subjectName,
        score,
        credit,
    });

    newSubject.save()
        .then(() => res.json('Subject added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Subject.findById(req.params.id)
        .then(subject => res.json(subject))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Subject.findByIdAndDelete(req.params.id)
        .then(() => res.json('Subject deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Subject.findById(req.params.id)
        .then(subject => {
            subject.subjectName = req.body.subjectName;
            subject.score = Number(req.body.score);
            subject.credit = Number(req.body.credit);

            subject.save()
                .then(() => res.json('Subject updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
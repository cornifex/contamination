document.addEventListener('DOMContentLoaded', function() {
    addContaminationControlListeners();

    function addContaminationControlListeners() {
        var contaminationControls = document.getElementsByClassName('zone-contamination-op');

        for (var i = 0; i < contaminationControls.length; i++) {

            contaminationControls[i].addEventListener('click', function () {

                var target = document.getElementById(this.dataset.controlTargetZone);
                var targetContent = parseInt(target.innerHTML);
                var op = this.dataset.op;

                switch (op) {
                    case 'increase':
                        if (targetContent < 6) {
                            target.innerHTML = targetContent + 1;
                        }
                        break;
                    case 'decrease':
                        if (targetContent > 0) {
                            target.innerHTML = targetContent - 1;
                        }
                        break;
                }
            });
        }
    }
});
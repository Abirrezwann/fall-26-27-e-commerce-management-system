if (document.getElementById("selectedPaymentMethod") !== null) {

    document.querySelector('#BkashForm input[name="bkashOTP"]').id = "bkashOTP";

    let forms = ["visaForm", "mastercardForm", "BkashForm", "NagadForm"];
    let radios = document.querySelectorAll('input[name="payment"]');
    let config = [
        ["visaForm", ["visaCardName", "visaCardNumber", "VexpiryDate", "Vcvv"]],
        ["mastercardForm", ["MCardName", "McardNumber", "MexpiryDate", "Mcvv"]],
        ["BkashForm", ["BphNumber", "bkashOTP", "bkashPass"]],
        ["NagadForm", ["NphNumber", "nagadOTP", "nagadPass"]]
    ];

    function show(id) {
        for (let i = 0; i < forms.length; i++)
            document.getElementById(forms[i]).style.display = forms[i] === id ? "block" : "none";
    }
    show("");

    for (let i = 0; i < radios.length; i++)
        radios[i].addEventListener("change", function () { show(radios[i].value + "Form"); });

    for (let i = 0; i < config.length; i++) {
        let formId = config[i][0], fields = config[i][1];
        document.querySelector("#" + formId + " form").addEventListener("submit", function (e) {
            e.preventDefault();
            for (let j = 0; j < fields.length; j++) {
                if (document.getElementById(fields[j]).value.trim() === "") {
                    alert("Please fill all fields");
                    return;
                }
            }
            alert("Payment successful");
            this.reset();
        });
    }
}
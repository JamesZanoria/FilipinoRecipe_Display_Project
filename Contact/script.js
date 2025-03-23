const privacyModal = document.getElementById("privacyPolicyModal");
const termsModal = document.getElementById("termsOfServiceModal");

const privacyPolicyLink = document.getElementById("privacy-policy-link");
const termsOfServiceLink = document.getElementById("terms-of-service-link");

const closeSpans = document.getElementsByClassName("close");

privacyPolicyLink.onclick = function() {
    privacyModal.style.display = "block";
}

termsOfServiceLink.onclick = function() {
    termsModal.style.display = "block";
}

for (let i = 0; i < closeSpans.length; i++) {
    closeSpans[i].onclick = function() {
        privacyModal.style.display = "none";
        termsModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target === privacyModal) {
        privacyModal.style.display = "none";
    } else if (event.target === termsModal) {
        termsModal.style.display = "none";
    }
}
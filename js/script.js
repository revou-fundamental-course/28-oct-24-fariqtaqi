document.addEventListener("DOMContentLoaded", function () {
    // Mengambil elemen-elemen yang diperlukan
    const weightInput = document.querySelector("input[type='number']:nth-of-type(1)");
    const ageInput = document.querySelector("input[type='number']:nth-of-type(2)");
    const heightInput = document.querySelector("input[type='number']:nth-of-type(3)");
    const resultBtn = document.querySelector(".result");
    const resetBtn = document.querySelector(".reset");
    const hasilDisplay = document.querySelector(".hasil");
    const commentDisplay = document.querySelector(".comment");

    // Fungsi untuk menghitung BMI
    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Konversi tinggi dari cm ke meter

        if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
            alert("Masukkan nilai berat dan tinggi yang valid!");
            return;
        }

        // Rumus BMI
        const bmi = (weight / (height * height)).toFixed(2);

        // Menampilkan hasil BMI
        hasilDisplay.textContent = bmi;

        // Menentukan kategori berdasarkan nilai BMI
        let status;
        if (bmi < 18.5) {
            status = "Kekurangan Berat Badan";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            status = "Ideal";
        } else if (bmi >= 25 && bmi <= 29.9) {
            status = "Kelebihan Berat Badan";
        } else {
            status = "Obesitas";
        }

        commentDisplay.textContent = `Status Berat Badan Anda: ${status}`;
    }

    // Fungsi untuk mereset form
    function resetForm() {
        weightInput.value = '';
        ageInput.value = '';
        heightInput.value = '';
        hasilDisplay.textContent = '00.00';
        commentDisplay.textContent = '';
    }

    // Menambahkan event listener pada tombol
    resultBtn.addEventListener("click", function (e) {
        e.preventDefault();
        calculateBMI();
    });

    resetBtn.addEventListener("click", function (e) {
        e.preventDefault();
        resetForm();
    });
});

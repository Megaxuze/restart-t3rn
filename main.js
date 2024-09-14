const { exec } = require('child_process');

// Fungsi untuk menampilkan pesan saat install/git clone
function showInstallationMessage() {
    const message = `
    echo -e "\\033[0;35m";
    echo "=====================================================";
    echo "                  AIRDROP ASC                        ";
    echo "=====================================================";
    echo -e '\\e[0;35mCredit By :\\e[0;35m Airdrop ASC';
    echo -e '\\e[0;35mTelegram Channel :\\e[0;35m @airdropasc';
    echo -e '\\e[0;35mTelegram Group :\\e[0;35m @autosultan_group';
    echo "=====================================================";
    echo -e "\\e[0m";
    `;

    exec(message, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
    });
}

// Fungsi untuk merestart service executor
function restartExecutor() {
    exec('sudo systemctl restart executor', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
    });
}

// Jalankan pesan saat install/git clone
showInstallationMessage();

// Interval waktu: 1 Jam  = 3600000 milidetik
setInterval(restartExecutor, 3600000);

// Jalankan perintah pertama kali saat script dimulai
restartExecutor();

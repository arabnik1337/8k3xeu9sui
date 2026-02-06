        document.getElementById('flip-coin').addEventListener('click', function() {
            const results = ['Орел', 'Решка'];
            const randomIndex = Math.floor(Math.random() * 2);
            const result = results[randomIndex];
            
            const coinResult = document.getElementById('coin-result');
            coinResult.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Монетка летит...';
            
            setTimeout(() => {
                coinResult.innerHTML = `<span style="font-size: 2.5rem;">${randomIndex === 0 ? '🦅' : '💰'}</span><br><strong>${result}!</strong>`;
                
                coinResult.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    coinResult.style.transform = 'scale(1)';
                }, 200);
            }, 800);
        });
        
        const lengthSlider = document.getElementById('length');
        const lengthValue = document.getElementById('length-value');
        const useNumbers = document.getElementById('use-numbers');
        const useSymbols = document.getElementById('use-symbols');
        const generatePasswordBtn = document.getElementById('generate-password');
        const passwordResult = document.getElementById('password-result');
        
        lengthSlider.addEventListener('input', function() {
            lengthValue.textContent = this.value;
        });
        
        generatePasswordBtn.addEventListener('click', function() {
            const length = parseInt(lengthSlider.value);
            const includeNumbers = useNumbers.checked;
            const includeSymbols = useSymbols.checked;
            

            const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numbers = '0123456789';
            const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            
            let characters = letters;
            if (includeNumbers) characters += numbers;
            if (includeSymbols) characters += symbols;
            
            let password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                password += characters[randomIndex];
            }
            
            passwordResult.textContent = password;
            passwordResult.style.fontFamily = "'Courier New', monospace";
            passwordResult.style.fontSize = "1.2rem";
            passwordResult.style.letterSpacing = "2px";
            
            passwordResult.style.opacity = '0';
            setTimeout(() => {
                passwordResult.style.opacity = '1';
                passwordResult.style.transition = 'opacity 0.3s';
            }, 10);
        });
        
        const imageOptions = document.querySelectorAll('.option-btn[data-category]');
        const getImageBtn = document.getElementById('get-image');
        const imageResult = document.getElementById('image-result');
        
        let selectedCategory = 'meme';
        
        imageOptions.forEach(option => {
            option.addEventListener('click', function() {
                imageOptions.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                selectedCategory = this.dataset.category;
            });
        });
        
        const memeImages = [
            'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
            'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
            'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80'
        ];
        
        const animalImages = [
            'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
            'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
            'https://images.unsplash.com/photo-1534188753412-9f0337d6ee9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80'
        ];
        
        const spaceImages = [
            'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
            'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80',
            'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80'
        ];
        
        getImageBtn.addEventListener('click', function() {
            let imagesArray;
            let categoryName;
            
            switch(selectedCategory) {
                case 'meme':
                    imagesArray = memeImages;
                    categoryName = 'мем';
                    break;
                case 'animal':
                    imagesArray = animalImages;
                    categoryName = 'животное';
                    break;
                case 'space':
                    imagesArray = spaceImages;
                    categoryName = 'космос';
                    break;
                default:
                    imagesArray = memeImages;
                    categoryName = 'мем';
            }
            
            const randomIndex = Math.floor(Math.random() * imagesArray.length);
            const imageUrl = imagesArray[randomIndex];
            
            imageResult.innerHTML = `
                <img src="${imageUrl}" alt="Случайное изображение" class="image-result">
            `;
            
            const img = imageResult.querySelector('img');
            img.style.opacity = '0';
            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transition = 'opacity 0.5s';
            }, 10);
        });
        
        const secretInput = document.getElementById('secret-input');
        const createMessageBtn = document.getElementById('create-message');
        const secretResult = document.getElementById('secret-result');
        
        const encryptionMethods = [
            {
                name: "Шифр Цезаря",
                encode: (text) => {
                    let result = '';
                    for (let i = 0; i < text.length; i++) {
                        let char = text[i];
                        if (char.match(/[a-z]/i)) {
                            const code = text.charCodeAt(i);
                            if (code >= 65 && code <= 90) {
                                char = String.fromCharCode(((code - 65 + 3) % 26) + 65);
                            } else if (code >= 97 && code <= 122) {
                                char = String.fromCharCode(((code - 97 + 3) % 26) + 97);
                            }
                        }
                        result += char;
                    }
                    return result;
                },
                riddle: "Сдвинь каждую букву на три позиции вперед в алфавите"
            },
            {
                name: "Обратный текст",
                encode: (text) => {
                    return text.split('').reverse().join('');
                },
                riddle: "Прочитай сообщение задом наперед"
            },
            {
                name: "Двоичный код",
                encode: (text) => {
                    return text.split('').map(char => {
                        return char.charCodeAt(0).toString(2).padStart(8, '0');
                    }).join(' ');
                },
                riddle: "Расшифруй двоичный код в текст (8 бит на символ)"
            },
            {
                name: "Чередование регистра",
                encode: (text) => {
                    return text.split('').map((char, i) => {
                        return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
                    }).join('');
                },
                riddle: "Чередуй регистр букв: первая заглавная, вторая строчная и так далее"
            }
        ];
        
        createMessageBtn.addEventListener('click', function() {
            const message = secretInput.value.trim();
            
            if (!message) {
                secretResult.innerHTML = `
                    <div class="message-style">Пожалуйста, введите сообщение для создания тайного послания!</div>
                    <div class="message-riddle">Сообщение не может быть пустым</div>
                `;
                return;
            }
            
            const methodIndex = Math.floor(Math.random() * encryptionMethods.length);
            const method = encryptionMethods[methodIndex];
            
            const encodedMessage = method.encode(message);
            
            secretResult.innerHTML = `
                <div class="message-style"><strong>${method.name}:</strong> ${encodedMessage}</div>
                <div class="message-riddle"><strong>Загадка для расшифровки:</strong> ${method.riddle}</div>
            `;
            
            secretResult.style.opacity = '0';
            setTimeout(() => {
                secretResult.style.opacity = '1';
                secretResult.style.transition = 'opacity 0.3s';
            }, 10);
        });
        
        generatePasswordBtn.click();
        
        secretInput.value = "Привет, мир!";
        createMessageBtn.click();
        
        getImageBtn.click();
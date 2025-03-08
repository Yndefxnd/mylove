        // Создание плавающих элементов фона
        function createBackgroundElements() {
            // Создаем мерцающие частицы
            const particles = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 10 + 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Случайная позиция
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Случайная задержка для плавного появления
                particle.style.animationDelay = `${Math.random() * 15}s`;
                
                particles.appendChild(particle);
            }
            
            // Создаем красивые декоративные элементы
            const bgElements = ['🌸', '💖', '💕', '🌹', '✨', '💝', '🌷', '💐', '💗'];
            const bgElementCount = 25;
            
            for (let i = 0; i < bgElementCount; i++) {
                const element = document.createElement('div');
                element.className = 'bg-element';
                
                // Выбираем случайный элемент
                const elementType = bgElements[Math.floor(Math.random() * bgElements.length)];
                element.innerHTML = elementType;
                
                // Случайный размер
                const size = Math.random() * 30 + 20;
                element.style.fontSize = `${size}px`;
                
                // Случайная позиция
                element.style.left = `${Math.random() * 100}%`;
                element.style.top = `${Math.random() * 100}%`;
                
                // Анимация в зависимости от типа элемента
                const duration = Math.random() * 5 + 5;
                const delay = Math.random() * 5;
                
                if (elementType === '💖' || elementType === '💕' || elementType === '💗' || elementType === '💝') {
                    element.style.animation = `floatHeart ${duration}s ease-in-out ${delay}s infinite`;
                } else {
                    element.style.animation = `floatFlower ${duration}s ease-in-out ${delay}s infinite`;
                }
                
                // Добавляем элемент на страницу
                document.body.appendChild(element);
            }
            
            // Создаем плавающие сердечки и цветы разных размеров и стилей
            createSvgElements();
        }
        
        // Создаем красивые SVG элементы
        function createSvgElements() {
            const svgCount = 15;
            
            // Шаблоны SVG элементов
            const svgTemplates = [
                // Красивое сердце
                (color) => `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <path d="M50,30 C35,10 10,20 10,40 C10,60 25,75 50,90 C75,75 90,60 90,40 C90,20 65,10 50,30 Z" 
                    fill="${color}" />
                </svg>`,
                
                // Цветок с 5 лепестками
                (color) => `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <g transform="translate(50,50)">
                        <circle cx="0" cy="0" r="10" fill="#FFCC00" />
                        <path d="M0,-15 C10,-35 20,-15 0,-40 C-20,-15 -10,-35 0,-15" 
                        fill="${color}" transform="rotate(0)" />
                        <path d="M0,-15 C10,-35 20,-15 0,-40 C-20,-15 -10,-35 0,-15" 
                        fill="${color}" transform="rotate(72)" />
                        <path d="M0,-15 C10,-35 20,-15 0,-40 C-20,-15 -10,-35 0,-15" 
                        fill="${color}" transform="rotate(144)" />
                        <path d="M0,-15 C10,-35 20,-15 0,-40 C-20,-15 -10,-35 0,-15" 
                        fill="${color}" transform="rotate(216)" />
                        <path d="M0,-15 C10,-35 20,-15 0,-40 C-20,-15 -10,-35 0,-15" 
                        fill="${color}" transform="rotate(288)" />
                    </g>
                </svg>`,
                
                // Звездочка
                (color) => `<svg viewBox="0 0 100 100" width="100%" height="100%">
                    <path d="M50,5 L63,35 L95,35 L70,55 L80,85 L50,70 L20,85 L30,55 L5,35 L37,35 Z" 
                    fill="${color}" />
                </svg>`
            ];
            
            // Оттенки розового и фиолетового для элементов
            const colors = [
                '#ffb6c1', '#ff69b4', '#ffc0cb', '#db7093', '#ff1493', 
                '#ffa6c9', '#ff85b3', '#ffb2d1', '#fc87b4', '#ff66a3',
                '#DDA0DD', '#EE82EE', '#DA70D6', '#BA55D3', '#9932CC'
            ];
            
            for (let i = 0; i < svgCount; i++) {
                const svgElement = document.createElement('div');
                svgElement.className = 'bg-element';
                
                // Случайный размер
                const size = Math.random() * 70 + 30;
                svgElement.style.width = `${size}px`;
                svgElement.style.height = `${size}px`;
                
                // Случайная позиция
                svgElement.style.left = `${Math.random() * 100}%`;
                svgElement.style.top = `${Math.random() * 100}%`;
                
                // Выбор случайного цвета и шаблона
                const color = colors[Math.floor(Math.random() * colors.length)];
                const templateIndex = Math.floor(Math.random() * svgTemplates.length);
                const svgContent = svgTemplates[templateIndex](color);
                
                svgElement.innerHTML = svgContent;
                
                // Анимация плавания
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;
                
                svgElement.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
                
                // Добавляем элемент на страницу
                document.body.appendChild(svgElement);
            }
        }
        
        function rand(min, max) {
            // случайное число от min до (max+1)
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
          }
        
            function Yes() {
                const result = document.querySelector('#result')
                if (result) {
                    result.innerHTML = `Спасибо что будешь лучиком света, который светит мне!`
                }
            }
            function No() {
                // 1. Получаем сам элемент кнопки (не onclick)
                const button = document.getElementById('no');
                
                // Проверяем, что кнопка существует
                if (!button) {
                    console.error("Кнопка не найдена!");
                    return;
                }
            
                // 2. Получаем размеры окна и кнопки
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const buttonWidth = button.offsetWidth;
                const buttonHeight = button.offsetHeight;
            
                // 3. Рассчитываем максимальные координаты
                const maxX = windowWidth - buttonWidth;
                const maxY = windowHeight - buttonHeight;
            
                // 4. Генерируем случайные координаты (используем Math.random())
                const randCoordsX = Math.random() * maxX; // от 0 до maxX
                const randCoordsY = Math.random() * maxY; // от 0 до maxY
            
                // 5. Устанавливаем позицию с единицами измерения (px)
                button.style.position = 'absolute'; // Обязательно для перемещения
                button.style.left = `${randCoordsX}px`;
                button.style.top = `${randCoordsY}px`;
            }
        // Обработчики модального окна
        document.getElementById('openModal').addEventListener('click', function() {
            document.getElementById('modalOverlay').style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Запретить прокрутку основной страницы
        });
        
        document.getElementById('closeModal').addEventListener('click', function() {
            document.getElementById('modalOverlay').style.display = 'none';
            document.body.style.overflow = 'auto'; // Разрешить прокрутку основной страницы
        });
        
        // Закрытие модального окна при клике вне его
        document.getElementById('modalOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Запускаем создание элементов фона при загрузке страницы
        window.onload = createBackgroundElements;

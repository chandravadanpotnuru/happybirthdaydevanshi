        const dot = document.getElementById('cursor-dot');
        const outline = document.getElementById('cursor-outline');
        const audio = document.getElementById("myAudio");
        const progress = document.getElementById("musicBar");
        const playBtn = document.getElementById("play-btn");
        const volSlider = document.getElementById("volume-slider");

        // RESTORED FULL POETRY DATA
        const herPoetryStore = [
            { 
                title: "The princess who slept forever", 
                date: "19/10/25", 
                text: `You know —\nYour search is done.\nYour heart has met;\nIt’s time for you to settle down,\nTo plant your feet on the ground.\n’Cause once upon a time,\nI knew,\nI was certain — it was you.\nIn all fairy tales,\nI am to be your princess,\nIn a beautiful castle,\nWith our own little sweet ending —\nWhere love seems real,\nUntil it lasts.\nBefore the dawn kisses the day,\nI wake up\nWith a startled face.\nMy fairytale crushed\nInto tiny little pieces —\nCastle broken in two,\nDresses ripped apart,\nMy carriage with no wheels,\nAnd twelve o’clock to be up.\n\nJust remember —\nOnce upon a time,\nYou were my prince,\nA tall, handsome boy,\nWith a crystal shoe in your hand,\nSearching for your dear,\nNot knowing she was right here.\nPromise me, in my next life,\nYou will be my prince —\nNo beast,\nNo curse,\nNo tangled web to trap us in,\nNo spins,\nNo cruel kin —\nJust you and me,\nAnd no one else.\nWith seven lives ahead,\nYou are the element that would never change.\nI’ll live forever,\nIn a castle or on the road with you.\nJust let me know\nIf I can kiss you,\nMark you mine —\nSo you don’t run away\nTo another princess of your lifetime.\n\nI will sleep with this dream,\nLet my fairytale be resumed.\nIf I don’t wake — let it be so,\nFor in my dreams, at last,\nWe have found our home.` 
            },
            { 
                title: "Winter Knows", 
                date: "2025", 
                text: `Winter knows in a way other seasons don’t.\nIt is sweet and humble,\nholds you still\ntill you cast your pieces away.\n\nSome things go unnoticed and slip astray—\nlike the aching trees or the crooked roads,\nthe cold air with a runny nose.\nSome things go unnoticed on a frosted day\nlike my pumping heart,\nglacial and rusty.\nIt grows numb, covered in snow,\nfrom all the cold-hearted people\nwho have tried to hurt me before.\n\nWinter goes unnoticed,\nnever knowing\nit has the prettiest skies,\nthe morning dew,\na soft, sweet scent\nof the ocean’s hue.\nThe moon brightens the sky\nwhen all is dark,\nand moonbirds sleep\nbeneath the sparks,\nsafe within\nthe silver cradle of its heart.\n\nWinter is honest in a way\nthe other seasons aren’t.\nIt hides your secrets in the dark\nwhen light disappears.\nIt bends, it mends,\noffers a hand\nfor you to lean on.\nYou plead and plead,\nnot knowing\nthe dark will disappear.\nUnlike other seasons,\nthe moon still lingers\nin the dawn’s light,\nkeeping every secret\nsafe from sight.\n\nBut for me,\nwinter has stayed the same.\nFor the past few years,\nevery frosted day\nfills with ache and sorrow—\na wave of pain\nthat sweeps me away.\n\nWinter has always been the same.\nIt always gives\nthe darkest hopes\non the brightest days,\nthe worst of news\non the best of days.\n\nWinter has always been the same—\na haunted house with no ghosts to slay,\na Thanksgiving dinner with no final grace,\na Christmas with no Santa anywhere,\nand a New Year\nWith nothing new drawing near.` 
            },
            { 
                title: "5 seasons of loving you", 
                date: "2025", 
                text: `You r my summer \nMy winter \nMy autumn \nMy spring \nMy monsoon \n\nWhen i say u r sun \nI dont recall \nTired and restless days \nWith heat on my head \nWith squinting eyes \nI recall the warmth of sun on \nWinter cold day \nThe morning sunrise in the dark \nBut a little shine of light was enough to see \nto keep me warm \nAnd everlasting that day \n\nWhen I say u r my winter \nI dont recall goesmbump skin and feeling ache \nWith a running nose and a swollen cough \nYet a cold shiver on a peaceful day \nOn the road a scarf around my neck \nWith a little wind to keep me chilly  \nFresh and shivering all day\n\nWhen I say u are my autumn \nI dont recall crispy old leaves \nBaring here n there \nThat have turned all yellow n grey \nOld and shady \nWith an unnoticing glaze \nYet I Remember all the shades of brown \nWith a mix of yellow and pink and blue \nLike all the colour's of my heart \nA little warmth a little cold \nAnd a little you \nTo make me whole that day\n\nWhen i say u r my rain \nI dont recall a busy day \nPeople here n there with umbrellas beside\nIrritate and drenched with showers of rain \nYet I Remember the smell of u after u r gone \nThe feeling of little droplets on my skin \nAnd pitter patter sound of your falls and hits \n\nAnd finally \nWhen I say u r my spring \nI dont remember me sneezing away \nwith an unpredictable weather \nHingering lingering there \nYet i remember the new flowers budding with glory \nA pleasant smell \nA wave of love in the air \nSmall roads small bicycles \nAnd us riding our way \nHolding hands \nLaughing out hearts away \nCoz nth do us part \nEven if we dare \n\n5 seasons \n5 feelings \nAnd I love u in all \nYou u r my sun \nMy warm winter \nMy old crispy leaves\nMy rain  \nAnd my new budding flowers \nFor today tomorrow and forever on`
            },
            {
                title: "When 11:11 Became You",
                date: "25/10/25",
                text: `I don’t wish anymore\nOn eyelashes or shooting stars.\n11:11 has left me with far too many broken hearts.\n\nI blow out the candles,\nWhisper happy birthday.\nI don’t wish for anything—\nNot any new toy or boy,\nNot for health or wealth,\nNor even simple smiles.\n\nI don’t wish anymore\nWhen I go to sleep.\nI turn off the light\nWith far too many thoughts,\nYet none dares to leave my mouth.\n\nBut lately, things have changed.\nYou stepped into my life,\nAnd 11:11 doesn’t feel like a lie.\nI keep checking the time—\nWhen it will be time to wish, to pray—\nBut I know it won’t draw near.\n\nLately, things have changed.\nI want you in my life,\nBut I know I can’t wish for it,\nBecause all my wishes have failed to prove\nMy fate, my luck.\nIt has resolved my case—\nYou will never be mine.\n\nI stare at my ceiling in the dark,\nWondering whether to speak my thoughts\nOr swallow them again.\n\nMy eyelashes fall, and I save them in a jar.\nEach carries a little lie.\nShould I toss them out,\nOr dare to wish them all away?\n\nLately, things have changed.\nI want you in my life,\nBut I know I can’t wish for it,\nBecause all my wishes have failed to prove\nMy fate, my luck.\nIt has resolved my case—\nYou will never be mine.\n\nBut last night,\nI saw a shooting star cut across the sky.\nMy hands quietly folded,\nAnd I whispered into the silence,\n“I love him.\nPlease let him be mine.”\nI broke my vow,\nBut God, it felt divine.\n\nI threw away the lashes.\nI slept at night.\nI wished for you once—\nNow I will wait for the stars\nTo twinkle their sparkling light\nIn the hope\nYou would be mine.`
            },
            {
                title: "SPEED DIAL FOR GRIEF",
                date: "11/07/25",
                text: `We call 911 \nWhen we r in trouble \n101 when there is a fire \n100 whe we r dying \nBut what no. to dial when there is \nNo fire \nNo accidents \nNo thief but only grief\nWe call ambulance for broken bones \nBut not broken hearts\nThe one that has been ruptured and teared  apart \n\nAmbulances rushs with sirens loud\nmake it's way through the bustling crowd \nBut who arrives for our silent crys and unsatisfied love\nFor our pain in those heavy hearts \nThey Dont recieve any help\nJust a small pat on the back \nA phrase dont give up keep going \nBut how should that heart still pump \nWhen the blood runs tired, love unmet was never meant to be mine, and all warmth slowly dies\n\nWhy do we have to show scars on our skin \nHave evidence of fractured body\nblood to be spilled to make it real \nWhy can't my heavy breaths and shaking hands \nBe the proof of my ache\nwhy can't my tears and dreadful eyes \nbe enough to show my despair \nWhat if \nMy heart will bleed but my body won't \nMy hand will shake but my skin won't \nMy hair would fall apart \nBut not a single broken bone would be found \nWill they still send a buzzing car \nWill the people still gather around \n\nI wish one day \nthere will be a no. to call \nAn ambulance wud be sent \nNot for broken bodies with bruises   \nBut for bleeding souls who no one calls`
            },
            {
                title: "TWIN STARS",
                date: "04/11/25",
                text: `Death is a villain that doesn’t take\nOne victim at a time.\nAll your loved ones stare with desperate eyes,\nLook at that body half-died.\nTwo coffins side by side,\nWith prolonged fondness,\nMatching flowers,\nMatching colours —\nIt looks like they were lovers.\n\nI heard your last sigh,\nThe pumping heart,\nSaw a barbaric smile.\nGently spoke,\n“Darling,\nDon’t leave me behind.\nI can’t stay in the dirt too long,\nWith you not by my side.”\n\nEven death seems mild\nWhen two hearts unite.\nIt is mortal and fatal,\nLike fate is a web\nThey have trapped us in.\nBut there must be a way,\nPerhaps a diversion —\nEscape these blinding lights,\nAnd meet in the endless skies.\n\nIf we become stars,\nWill you stay close to me?\nGreet me in the dawn’s light,\nAnd end with a goodnight.\nBe my closest twin,\nAnd never leave my side.\nShine so bright that I forget my pain —\nHow many times my heart got stabbed to bear that ache.\nDon’t be a morning star,\nDon’t be an evening one.\nI want you to be mine,\nJust mine.\n\nDo you know Altair and Vega’s tale?\nThey meet only once,\nAnd embrace their whole love\nThrough the Milky Way’s chains.\n\nIf you will be my Altair true,\nI will be your Vega, waiting too.\nPromise me through Heaven’s sphere,\nWe will meet at least once a year.\nIt is enough\nFor immortality to seem real.\n\nBut when you died,\nA part of me died inside.\nThey covered you in brown dirt,\nAnd buried too my living hurt.\nI proved my love by dying,\nBecause I know —\nImmortality is only real\nWhen we are no longer alive.`
            },
            {
                title: "Timeless Glow",
                date: "25/10/25",
                text: `your eyes personify timeless glow\nof silver stars and ocean hue\nthey mirror a day i dwelled in ur heart\nwhere love felt eternal - surreal and true`
            },
            {
                title: "Live It While You Can",
                date: "26/10/25",
                text: `I cannot wait for you to live this life,\nWith fleeting joy and a thriving smile.\nA phrase — life is short,\nSo don’t stop, keep going,\nUntil you’re the one that stops breathing\nAnd starts aching.\nLive it wild, live it fully,\nLive it like your last flee.\n\nIt is not long, nor so short,\nYou never know when it’s your call.\nSo do all the things you want before,\nLove the soul you most adore.\nDon’t wait for ten years more,\nUntil you have grown and matured.\nWhen love is real, you are never of age,\nAlways a kid in your own fairytale.\nLove comes gently, like soft clouds,\nYou miss your chance, it will rain down loud.\n\nDon’t chase your family wealth\nTo earn your name, your fame.\nWealth can’t fill your life’s empty space,\nSpend it as you like,\nIt’s not a treasure to keep at the end of the day.\nGo on the ski trip,\nBuy that watch,\nChange the décor, paint the walls.\nEat that steak at that Michelin grill,\nEven if it is not divine,\nAt least you can say, I tried the wine.\n\nTry everything in life — the right and wrong,\nTo know what is to keep\nAnd what is to throw away.\n\nLove as many people as you can,\nYour heart was made with an empty hand.\nPumping is just a sweet disguise,\nTo carry the love through your veins\nAnd spread it along, fill it with love that never dies.\n\nVisit that friend,\nHave a coffee,\nSit for hours,\nSpill the tea.\nGo to your grandparents\nAnd learn that recipe.\nPlant flower beds in the garden bends,\nYou never know when their stories end.\nSo cherish each moment\nBefore it is gone.\n\nWhatever you do,\nDo it to your best.\nLet passion fulfil your dreams,\nAnd your speed chase away the fear.\nThere is no time to rest.\n\nAnd when the day comes,\nDon’t regret.\nLife was short, yet full and sweet.\nLay on that bed with flowers beside\nAnd reminisce the days you pleasantly stayed awake.\nLeave this world\nWith hands full of love,\nA bag of memories to hold,\nOf sweet smiles and small laughs,\nNo regrets, no grief to ache,\nNo tears to shed, no pain to mould.\n\nSo close your eyes\nAnd rest in the bed,\nSoftly dream\nOf your next life ahead.`
            },
            {
                title: "Whispers to heaven",
                date: "22/10/25",
                text: `I hope when death knocks at my door,\nThere aren’t tears anymore.\nMy bed full of thorns,\nWith whispers to hear.\nI am done with secrets, masks, and lies —\nLet me stay still.\nWhatever remains,\nSay it to me then,\nOr forever seal your lips still.\n\nDon’t regret,\nDon’t forget,\nPlease forgive\nAll the mistakes I have made.\nI was not okay,\nMy battles were hard,\nBut I fought them with a mighty rage —\nWith a sword in my hand, through fire and rain,\nOn thorns and nails I lingered upon.\nOn an invisible string,\nI bled and bled from the one soul God ever gave.\nBore endless pain,\nUntil I shed and faded away.\n\nThe storm screamed inside my mind,\nThe ghost that lived beneath my bed —\nThey lasted long; after all, they are gone.\nMy fight is done,\nI lost to my life.\nI’m sorry to myself —\nI couldn’t survive.\n\nI hope when it comes,\nIt’s kind and soft,\nOffers gentle hands and a warm heart.\nIt prepares a soft bed to lie within,\nWhispers to me,\n“Come, my child,\nTake some rest.\nI’ll carry your burden;\nI know it is of heavy weight.”\nIt treats my wounds,\nCaresses my scars,\nGuides me home —\na home that can never fall apart.\n\nI lay in this coffin,\nWith flowers beside.\nTo my friends and family —\nThis is my goodbye.\nPlease don’t cry,\nFor you, I must die.`
            }
        ];

        function openBooklet() {
            const bp = document.getElementById("booklet-page");
            const content = document.getElementById("book-content");
            content.innerHTML = herPoetryStore.map(p => `
                <div class="poem-entry">
                    <h4>${p.title}</h4>
                    <span class="date-label">${p.date}</span>
                    <p>${p.text}</p>
                </div>
            `).join('');
            bp.style.display = "flex";
            setTimeout(() => bp.style.opacity = "1", 10);
        }

        function closeBooklet() {
            const bp = document.getElementById("booklet-page");
            bp.style.opacity = "0";
            setTimeout(() => bp.style.display = "none", 500);
        }

        /* --- MODERN POETRY GENERATOR LOGIC --- */
        const modernPoemBank = [
            { author: "Soul", text: "You are allowed to be both\na masterpiece and\na work in progress\nsimultaneously." },
            { author: "Stars", text: "The stars don't ask to be seen.\nThey just shine.\nBe like a star." },
            { author: "Growth", text: "Some nights are for weeping\nso that the mornings\ncan be for blooming." },
            { author: "Love", text: "Love is not about\nholding hands.\nIt is about holding\nthe same silence." },
            { author: "Healing", text: "Flowers don't compete\nwith the one next to them.\nThey just bloom." },
            { author: "Courage", text: "Softness is not weakness.\nIt takes courage\nto stay kind\nin a world that is not." }
        ];

        async function generatePoem() {
            const display = document.getElementById('poem-display');
            const btn = document.getElementById('poem-trigger');
            display.innerHTML = "Seeking inspiration...";
            btn.disabled = true;
            setTimeout(() => {
                const randomPoem = modernPoemBank[Math.floor(Math.random() * modernPoemBank.length)];
                display.innerHTML = `
                    <span style="font-size:0.8rem; font-family:'Montserrat'; opacity:0.6; text-transform:uppercase; letter-spacing:2px;">Topic: ${randomPoem.author}</span><br><br>
                    ${randomPoem.text.replace(/\n/g, '<br>')}
                `;
                btn.disabled = false;
            }, 600);
        }

        const targetDate = new Date("March 20, 2026 00:00:00").getTime();
        function updateCountdown() {
            const now = new Date().getTime();
            const diff = targetDate - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);
            document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
        }
        setInterval(updateCountdown, 1000);

        function startApp() {
            audio.play().then(() => { playBtn.innerText = "II"; }).catch(() => {});
            document.getElementById("overlay").style.transform = "translateY(-100%)";
            updateProgress();
        }

        function togglePlay() {
            if (audio.paused) { audio.play(); playBtn.innerText = "II"; } 
            else { audio.pause(); playBtn.innerText = "▶"; }
        }

        function changeVolume(val) {
            audio.volume = val;
            volSlider.style.setProperty('--volume-percent', (val * 100) + '%');
        }

        function updateProgress() {
            if (audio.duration) {
                const percent = (audio.currentTime / audio.duration) * 100;
                progress.style.width = percent + "%";
            }
            requestAnimationFrame(updateProgress);
        }

        function openLetter() { const lp = document.getElementById("letter-page"); lp.style.display = "flex"; setTimeout(() => lp.style.opacity = "1", 10); }
        function closeLetter() { const lp = document.getElementById("letter-page"); lp.style.opacity = "0"; setTimeout(() => { lp.style.display = "none"; }, 500); }
        function showCake() { const cs = document.getElementById("cake-section"); cs.classList.add('active'); setTimeout(() => cs.style.opacity = "1", 10); }
        function closeCake() { const cs = document.getElementById("cake-section"); cs.style.opacity = "0"; setTimeout(() => { cs.classList.remove('active'); }, 500); }
        function cutCake() { 
    const cake = document.getElementById('emoji-cake');
    const form = document.getElementById('wish-form');
    const instruction = document.getElementById('cake-instruction');

    if(cake.innerText === "🎂") { 
        cake.innerText = "🍰"; 
        createConfetti();
        
        // Reveal the form after a short delay
        setTimeout(() => {
            instruction.innerText = "WHISPER IT...";
            form.style.display = "block";
            form.style.opacity = "0";
            setTimeout(() => form.style.opacity = "1", 10);
        }, 1000);
    }
}

// Handle Form Submission without leaving the page
const wishForm = document.getElementById('wish-form');
wishForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(wishForm);
    const response = await fetch(wishForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
        wishForm.style.display = 'none';
        document.getElementById('cake-instruction').style.display = 'none';
        document.getElementById('thank-you-msg').style.display = 'block';
    }
});

        function createConfetti() {
            for (let i = 0; i < 50; i++) {
                const c = document.createElement('div');
                c.style.position = 'fixed'; c.style.width = '10px'; c.style.height = '10px';
                c.style.background = ['#FF66AA', '#FFF', '#1DB954', '#A9DEF9'][Math.floor(Math.random()*4)];
                c.style.left = Math.random() * 100 + 'vw'; c.style.top = '-10px';
                c.style.zIndex = '6000';
                c.style.transition = 'transform 2.5s linear'; document.body.appendChild(c);
                setTimeout(() => { c.style.transform = `translate3d(0, 110vh, 0) rotate(${Math.random()*360}deg)`; }, 10);
                setTimeout(() => c.remove(), 2500);
            }
        }

        window.addEventListener('mousemove', (e) => {
            dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            outline.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0) rotate(15deg)`;
        });

        // RIBBON LOGIC
        const ribbonCount = Math.floor(Math.random() * 2) + 3;
        const edges = ['top', 'right', 'bottom', 'left'];
        edges.sort(() => Math.random() - 0.5);
        const chosenEdges = edges.slice(0, ribbonCount);

        chosenEdges.forEach(edge => {
            const ribbon = document.createElement('div');
            ribbon.className = 'bow-decor';
            ribbon.innerText = '🎀';
            const gap = Math.random() * 3 + 2;      
            const spread = Math.random() * 60 + 20; 
            if (edge === 'top') { ribbon.style.top = gap + '%'; ribbon.style.left = spread + '%'; } 
            else if (edge === 'right') { ribbon.style.right = gap + '%'; ribbon.style.top = spread + '%'; } 
            else if (edge === 'bottom') { ribbon.style.bottom = gap + '%'; ribbon.style.left = spread + '%'; } 
            else if (edge === 'left') { ribbon.style.left = gap + '%'; ribbon.style.top = spread + '%'; }
            ribbon.style.animationDuration = (6 + Math.random() * 3) + 's';
            document.body.appendChild(ribbon);
        });

        

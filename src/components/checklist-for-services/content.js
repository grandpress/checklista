export const pointsIncoming = [
  {
    id: 1,
    img: "/img/views/checklist-for-services/1.png",
    name: "Wersja mobilna",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Wersja mobilna</subheader><p><strong>Zgodnie z badaniami serwisu BroadBandSearch urządzenia mobilne stanowią ponad połowę całego ruchu wyszukań organicznych.</strong></p><img src="images/1_0.png" width="500" alt="Wersja mobilna"><p>Wraz ze wzrostem udziału urządzeń mobilnych w ruchu internetowym, Google w marcu 2018 roku oficjalnie zaczął wdrażać w życie mobile first index. Od tego czasu systemy do crawlowania coraz częściej rozpoczynają skanowanie strony mobilną wersją GoogleBota, symulując wejście z urządzenia mobilnego, zamiast z komputera stacjonarnego.</p><p><strong>Wdrożenie Mobile-First spowodowane rosnącą liczbą użytkowników mobilnych sprawia, że punktem wyjścia dla obliczenia rankingu strony w wyszukiwarce stanie się właśnie wersja mobilna. Według oficjalnych informacji punktem zwrotnym jest marzec 2021, kiedy to Mobile First powinien objąć bez wyjątku wszystkie strony w internecie.</strong></p><p>O wersję mobilną warto dbać nie tylko dla wyszukiwarki Google, ale również przez wzgląd na użytkowników korzystających z urządzeń mobilnych. Jej obecność ułatwia użytkownikom interakcję i umożliwia finalizację transakcji z poziomu smartfona. Jest jednym z wielu elementów, które mają wpływ m.in. na konwersję.</p><p>Podczas naszej analizy, sprawdziliśmy najważniejsze elementy, które zostaną omówione w kolejnych punktach.</p>',
  },
  {
    id: 1.1,
    name: "Dostosowanie do urządzeń mobilnych",
    img: "/img/views/checklist-for-services/1.1.png",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Dostosowanie do urządzeń mobilnych</subheader><p><strong>Urządzenia mobilne od komputera dzieli nie tylko rozmiar ekranu, ale też całkiem odmienny sposób obsługi. Użytkownik mobilny nie korzysta z myszki i klawiatury – najczęściej nawiguje po stronie kciukiem.</strong></p><img src="images/1_1.png" width="500" alt="Dostosowanie do urządzeń mobilnych"><p>Urządzenia mobilne cechuje mniejsza wydajność od tradycyjnego komputera i często różne urządzenia różnią się między sobą obsługiwanymi technologiami. Różnice wynikają z różnorodności mobilnych systemów operacyjnych, mnogości ich wersji i innych przeglądarek. Z tego powodu strona musi być możliwie uniwersalna.</p><p>Aby zaliczyć test dopasowania do urządzeń mobilnych, trzeba spełnić poniższe warunki:</p><ol><li><strong>Rozmiar tekstu musi być dopasowany do widocznego obszaru</strong> – należy unikać konieczności przewijania ekranu w poziomie. Treść musi się tak układać na stronie, żeby była widoczna w całości. Dopuszcza się tylko przewijanie w pionie.</li><li><strong>Czcionka nie powinna utrudniać czytania tekstu</strong> – Czcionka powinna mieć taki rozmiar, aby bez potrzeby powiększania ekranu dało się przeczytać zawartość strony. Przyjmuje się minimum 11px.</li><li><strong>Elementy klikalne nie powinny być zbyt blisko siebie</strong> – obsługa kciukiem wymusza większe odległości pomiędzy elementami klikalnymi, np. pozycjami w menu.</li><li><strong>Na stronie nie mogą występować obiekty typu Flash</strong> –  to technologia wyparta na rzecz HTML5 i JavaScript. Flash nigdy nie był zbytnio wspierany przez urządzenia mobilne, dlatego nie należy go stosować. Strona musi być zaprojektowana z użyciem nowoczesnych technologii.</li></ol><p>Więcej informacji dostępnych jest pod adresem: <a href="https://search.google.com/test/mobile-friendly?hl=pl">https://search.google.com/test/mobile-friendly</a></p><p></p>',
  },
  {
    id: 1.2,
    img: "/img/views/checklist-for-services/1.2.png",
    name: "Poprawność skalowania (responsywność)",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Poprawność skalowania (responsywność)</subheader><p>Google zaleca projektowanie stron w technologii responsywnej. Użycie techniki responsywnego projektowania strony sprawia, że dopasowuje się ona automatycznie do szerokości ekranu urządzenia. Dzięki takiemu zabiegowi jej zawartość jest czytelna i łatwa w obsłudze zarówno na telefonie komórkowym, jak i monitorze komputera stacjonarnego.</p><p></p><img src="images/1_2.png" width="500" alt="Poprawność skalowania (responsywność)"><p></p><p><strong>Zabrania się użycia elementów o stałej szerokości. Urządzenia mobilne posiadają wirtualny rozmiar ekranu, np. iPhone używa wirtualnej szerokości 320px, co znaczy, że ustawienie w CSS szerokości obiektu np. na 600px spowoduje konieczność przewijania w poziomie. Zaleca się użycia wielkości względnych wyrażonych w procentach np.</strong></p><p><strong>ŹLE:</strong><br>div.fullWidth {<br> <span style="background: #f8f810">width: 320px;</span><br>  margin-left: auto;<br>  margin-right: auto;<br>}<br><strong>DOBRZE:</strong><br>div.fullWidth {<br> <span style="background: #f8f810">width: 100%;</span><br>}<br>Więcej informacji: <a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive">https://developers.google.com/web/fundamentals/design-and-ux/responsive</a></p>',
  },
  {
    id: 1.3,
    name: "Elementy wychodzące za ekran",
    img: "/img/views/checklist-for-services/1.3.png",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Elementy wychodzące za ekran</subheader><p>W poprawnie działającej wersji responsywnej strony www każdy element musi mieścić się w obszarze roboczym przeglądarki internetowej bez dodatkowego przewijania na boki.</p><img src="images/1_3.png" width="500" alt="Elementy wychodzące za ekran"><p><strong>Wychodzące poza ekran:</strong></p><ul><li><strong>nagłówki,</strong></li><li><strong>obrazki,</strong></li><li><strong>akapity treści,</strong></li><li><strong>elementy call to action,</strong></li><li><strong>dane kontaktowe,</strong></li><li><strong>menu,</strong></li></ul><p><strong>mogą powodować dezorientację użytkownika i obniżają zaufanie, ponieważ dają wrażenie, że strona internetowa nie działa lub opublikowano jej wersję roboczą. Takie błędy, choć z pozoru nieistotne, mogą irytować użytkownika i w konsekwencji zniechęcać do finalizacji zakupów, czy podjęcia kontaktu.</strong></p><p>Pamiętaj, że strona internetowa musi budzić zaufanie, aby potencjalny klient nie obawiał się np. wyłudzenia danych.</p>',
  },
  {
    id: 1.4,
    name: "Skalowanie uszczypnięciem",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Skalowanie uszczypnięciem</subheader><p><strong>Postęp technologii wyrobił w użytkownikach przyzwyczajenia typowe dla ekranów dotykowych takie jak uszczypnięcie palcami w celu powiększania i zmniejszania. Ten odruch jest dla użytkownika bardzo intuicyjny. Zdarza się, że webmasterzy celowo blokują tę możliwość.</strong></p><p>Pamiętaj też, że użytkownik lubi mieć kontrolę nad systemem, z którego korzysta. Mówi o tym trzecia zasada heurystyki Nielsena. Dlatego, jeśli test nie został zaliczony, rekomendujemy umieszczenie w kodzie strony meta tagu viewport:</p><p><strong>&lt;meta name="viewport" content="initial-scale=1, maximum-scale=3, user-scalable=yes"&gt;</strong></p><p>Powyższy meta tag ma za zadanie wskazać przeglądarce urządzenia mobilnego skalę powiększenia strony internetowej: startową równą 100% wielkości i dopuszczalną maksymalną równą 300%.</p><p>Tag może przyjąć o wiele więcej parametrów:</p><ul><li><strong>width: </strong>Wirtualna szerokość ekranu.</li><li><strong>height:</strong> Wirtualna wysokość ekranu.</li><li><strong>initial-scale: </strong>Zbliżenie wstępne, przy załadowaniu strony.</li><li><strong>maximum-scale: </strong>Maksymalne dopuszczalne zbliżenie.</li><li><strong>minimum-scale: </strong>Minimalne zbliżenie.</li><li><strong>user-scalable:</strong> Określa, czy użytkownik może skalować stronę (yes/no).</li></ul><p>Więcej informacji: <a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive/#ustawianie_tagu_viewport">https://developers.google.com/web/fundamentals/design-and-ux/responsive/#ustawianie_tagu_viewport</a> </p><p></p>',
  },
  {
    id: 2,
    name: "Nagłówek strony (header)",
    img: "/img/views/checklist-for-services/2.png",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Nagłówek strony (header)</subheader><p>Użytkownikami poruszającymi się po internecie kierują przyzwyczajenia. Z tego powodu strona internetowa powinna być zaprojektowana na podstawie zbioru ogólnie przyjętych reguł. Wszystko po to, aby obsługa była możliwie intuicyjna.</p><img src="images/2_0.png" width="500" alt="Nagłówek strony (header)"><p><strong>Odstępstwa od reguł mogą powodować niepotrzebną dezorientację i utrudnienia w korzystaniu ze strony. Gdy obsługa będzie zbyt absorbująca dla potencjalnego klienta, może mieć to negatywny wpływ na podjęcie decyzji o wyborze wykonawcy usługi.</strong></p><p>W ramach przeprowadzonej analizy sprawdziliśmy najważniejsze punkty, m.in.:</p><ul><li>obecność danych kontaktowych w górnej belce,</li><li>łatwość interakcji,</li><li>obecność elementów budujących świadomość marki.</li></ul><p>Pamiętaj, że wykrycie w tej sekcji błędów wcale nie musi oznaczać, że strona jest trudna w odbiorze przez użytkowników. Liczy się też czytelność elementów, projekt graficzny adekwatny do branży i ogólne poczucie estetyki grafika. Jeśli wykryliśmy odstępstwa od reguł, to sygnalizujemy możliwe problemy.</p><p>Aby przekonać się, czy interfejs jest trudny w odbiorze, konieczne jest przeprowadzenie pełnego audytu z badaniem zachowań. Skontaktuj się z nami, by uzyskać więcej informacji.</p>',
  },
  {
    id: 2.1,
    img: "/img/views/checklist-for-services/2.1.png",
    name: "Telefon",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Telefon</subheader><p><strong>Dla wielu użytkowników wykonanie telefonu jest bardziej praktyczne niż wysłanie wiadomości mailem. Często przed wyborem usługodawcy pojawiają się wątpliwości, które rozmowa telefoniczna potrafi rozwiać w ciągu kilku minut.</strong></p><p>Telefon jest jedną z wielu form nawiązania kontaktu. Ma jednak szczególne znaczenie dla stron usługowych, ponieważ umożliwia nawiązanie szybkiego kontaktu ze zleceniobiorcą. Numer telefonu musi być widoczny i czytelny, aby został zauważony.</p><img src="images/2_1.png" width="500" alt="Telefon"><p>Z myślą o użytkownikach mobilnych trzeba zadbać, aby numer telefonu był klikalnym hiperłączem z protokołem „tel:”, dzięki któremu na telefonie automatycznie zostanie nawiązane połączenie.</p><p>Przykład poprawnie stworzonego hiperłącza numeru telefonu:</p><p><strong>&lt;a href=”tel:48111222333”>111 222 333&lt;/a></strong></p>',
  },
  {
    id: 2.2,
    img: "/img/views/checklist-for-services/2.2.png",
    name: "Mail",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Mail</subheader><p>Adres mailowy obok telefonu, jest drugim podstawowym kanałem kontaktu z klientami. W szczególności przydaje się w chwili gdy zachodzi konieczność przesłania dodatkowych szczegółów np. w formie załączników. Adres mailowy jest poszukiwany przez użytkowników w kilku typowych miejscach, jednym z nich może być nagłówek strony, a następnie podstrona kontakt i stopka.</p><img src="images/2_2.png" width="500" alt="Mail"><p>Należy pamiętać, aby mail był zawsze klikalnym hiperłączem z protokołem ‘mailto:’, dzięki niemu na telefonie automatycznie zostanie uruchomiony program mailowy, np. Gmail, a na komputerze program do obsługi poczty, np. Mozilla Thunderbird.</p><p>Przykład poprawnie stworzonego hiperłącza adresu mailowego:</p><p><strong>&lt;a href=”mailto:kontakt@moj-biznes.com”>kontakt@moj-biznes.com&lt;/a></strong></p>',
  },
  {
    id: 2.3,
    img: "/img/views/checklist-for-services/2.3.png",
    name: "Logo firmy",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Logo firmy</subheader><p>Aby zdobyć rozpoznawalność i zostać zapamiętanym przez klientów trzeba wypracować swoją indywidualną markę – własną tożsamość. Od niej zależy, w jaki sposób klienci będą postrzegać firmę. Wybierając spośród wielu ofert, klienci najczęściej kierują się pierwszym wrażeniem, dlatego podczas tworzenia strony internetowej należy zadbać o odpowiednie elementy identyfikacji wizualnej. Jej umiejętne i konsekwentne stosowanie ułatwia budowanie świadomości marki.</p><p><strong>Najważniejszą część składową identyfikacji wizualnej strony internetowej stanowi logotyp. Liczy się nie tylko jego inspirujący projekt graficzny i nawiązanie do branży. Trzeba zadbać również o jego odpowiednie wyeksponowanie na stronie internetowej. Rozmieszczenie logotypu, jego tło i marginesy muszą być również zgodne z księgą znaku.</strong></p><img src="images/2_3.png" width="500" alt="Logo"><p>Miejscem typowym dla logotypu jest nagłówek, a samo logo powinno być wyrównane do lewej strony. Dzięki takiemu układowi pozostaje dużo miejsca na umieszczenie menu oraz najważniejszych danych kontaktowych.</p>',
  },
  {
    id: 2.4,
    img: "/img/views/checklist-for-services/2.4.png",
    name: "Menu rozwijane",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Menu rozwijane</subheader><p>Menu musi składać się z tzw. struktury drzewiastej. Polega ona na wyznaczeniu kilku głównych silosów tematycznych, które stanowią podstrony nadrzędne. Na następnych poziomach występują podstrony o bardziej precyzyjnym dopasowaniu oferty. Na przykładzie firmy sprzątającej:</p><ul><li>Dla domu</li><ul><li>Mycie okien</li><li>Sprzątanie po remoncie</li><li>Mycie podłóg</li><li>Pranie tapicerki</li><li>...</li></ul><li>Dla firmy</li><ul><li>Sprzątanie biur</li><li>Czyszczenie wykładziny</li><li>...</li></li></ul></ul><p>Odpowiednia architektura informacji na stronie internetowej to ogromne ułatwienie dla użytkownika, który bez problemu pozna pełną ofertę.</p><p><strong>Przemyślany układ z podziałem na główne gałęzie tematyczne odgrywa ogromną rolę w budowaniu widoczności w wyszukiwarkach internetowych. Poprawny projekt struktury strony przyczynia się do umocnienia tematycznego autorytetu dla podstron w obrębie poszczególnych stosów tematycznych.</strong></p><img src="images/2_4.png" width="500" alt="Menu rozwijane"><p>Menu powinno być rozwijane. Wtedy użytkownik bez wejścia w sekcję “dla domu” dowie się, czy w ofercie znajduje się np. mycie okien, a GoogleBot uzyska informację o myciu okien już na stronie głównej, bez konieczności dodatkowego przejścia na zbiorczą podstronę oferty.</p>',
  },
  {
    id: 2.5,
    img: "/img/views/checklist-for-services/2.5.png",
    name: "Linki do social media",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Linki do social media</subheader><p>Obecność w social media jest nieodzownym elementem strategii budowania marki. Założenie konta na popularnych portalach takich jak Facebook czy Instagram stanowi dziś praktycznie obowiązek. Social media mogą powodować, że nie tylko budowanie marki, ale i stworzenie relacji z klientami będzie o wiele bardziej efektywne.</p><p>Za pośrednictwem przekazu w social mediach możesz informować potencjalnych klientów o rabatach, nowej ofercie czy na bieżąco obserwować ich reakcję na publikowane treści.</p><p>Aby poinformować swoich klientów o istnieniu profili na popularnych portalach social media, należy umieścić linki do nich w widocznych miejscach.</p><img src="images/2_5.png" width="500" alt="Linki do social media"><p><strong>Pamiętaj, że oprócz oczywistego budowania zaufania, portale społecznościowe mogą także wspomóc pozycjonowanie poprzez pozyskiwanie naturalnych linków. Po pierwsze, niektóre z umieszczonych tam linków do strony internetowej same w sobie niosą pewną wartość dla SEO, jak np. link z Facebooka. Po drugie, gdy podzielisz się w social mediach ciekawym materiałem ze swojej strony, istnieje szansa na to, że użytkownicy zaczną go między sobą przekazywać i w efekcie trafi on także do zewnętrznych źródeł, takich jak np. fora o danej tematyce. </strong></p><p>Biorąc pod uwagę, że link building stanowi nieodłączny element skutecznego pozycjonowania, pozyskane w ten naturalny sposób odnośniki wpływają pozytywnie na SEO.</p>',
  },
  {
    id: 2.6,
    img: "/img/views/checklist-for-services/2.6.png",
    name: "Okruszki (breadcrumbs) wszędzie oprócz strony głównej",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Okruszki (breadcrumbs) wszędzie oprócz strony głównej</subheader><p>Breadcrumbs, czyli nawigacja okruszkowa stanowi nieodłączny element każdej strony internetowej. Ma ona wskazać użytkownikowi aktualną pozycję w serwisie.</p><p>Nawigację okruszkową można porównać do struktury folderów na dysku twardym. Na stronach internetowych przybiera ona następującą formę:</p><p>Strona główna > Usługi > Pranie tapicerki</p><p>Okruszki muszą być umieszczone w widocznym miejscu w górnej części strony internetowej. Nie zabierają wiele przestrzeni, a pełnią przydatną funkcję, zarówno dla użytkownika, jak i robotów wyszukiwarek.</p><img src="images/2_6.png" width="500" alt="Breadcrumbs"><p>Użytkownicy mogą przejść do nadrzędnych podstron bez konieczności szukania odnośnika na stronie. Breadcrumbs zwykle umiejscawiamy tak, aby rzucały się w oczy. Dzięki nawigacji okruszkowej użytkownicy spędzają więcej czasu na stronie, spada współczynnik odrzuceń, a długość sesji znacznie się wydłuża. Często przekłada się to na wzrost konwersji lub sprzedaży.</p><p>Stosowanie „okruszków” jest też ważne dla SEO – nawigacja okruszkowa odzwierciedla strukturę strony, dzięki czemu roboty wyszukiwarek mogą łatwiej ją zrozumieć. Poprawia się również linkowanie wewnętrzne, a także przyśpiesza się indeksacja poszczególnych treści.</p>',
  },
  {
    id: 3,
    name: "Podstrona kontakt",
    img: "/img/views/checklist-for-services/3.png",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Podstrona kontakt</subheader><p>Posiadanie podstrony kontaktowej jest oczywistością. Niestety często zdarza się, że w gąszczu podstron zapomniano o niej lub niedopracowano jej zawartości.</p><p>W tym dziale nasza analiza skupia się m.in. na obecności:</p><ul><li>danych kontaktowych,</li><li>danych adresowych,</li><li>danych rejestracyjnych (NIP/REGON/KRS),</li><li>formularza kontaktowego,</li><li>interaktywnej mapki Google,</li></ul><img src="images/3_0.png" width="500" alt="Podstrona kontakt">',
  },
  {
    id: 3.1,
    img: "/img/views/checklist-for-services/3.1.png",
    name: "Dane kontaktowe",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Dane kontaktowe </subheader><p>Jak wynika z definicji podstrony kontaktowej, trzeba skupić się na obecności danych kontaktowych i ich odpowiedniej ekspozycji. Warto wspomnieć, że nawet ich kolejność ma znaczenie.</p><p>Rekomendujemy, aby w obszarze ATF, czyli części ekranu widocznej od razu po załadowaniu się strony internetowej zamieścić przynajmniej kluczowe dane kontaktowe, służące do pierwszego kontaktu. W przypadku gdy istnieją różne siedziby (np. w innych miejscowościach), powinny one znajdować się poniżej danych siedziby głównej.</p><img src="images/3_1.png" width="500" alt="Dane kontaktowe"><p>Należy pamiętać, aby każdy zamieszczony na podstronie kontaktowej numer telefonu i adres mailowy był klikalnym hiperłączem z odpowiednim protokołem, na przykład:</p><ul><li>numery telefonów: <strong>&lt;a href="tel:48123123123">+48 123 123 123&lt;/a></strong></li><li>adresy mailowe <strong>&lt;a href="mail:kontakt@domena.pl">kontakt@domena.pl&lt;/a></strong></li></ul><p>Nie można zapominać o godzinach, w których możliwe są konsultacje. Taką informację najlepiej zamieścić tuż obok numeru telefonu.</p>',
  },
  {
    id: 3.2,
    img: "/img/views/checklist-for-services/3.2.png",
    name: "Dane rejestracyjne firmy i dane adresowe",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Dane rejestracyjne firmy i dane adresowe</subheader><p>Dane rejestracyjne firmy są najważniejszym elementem budującym wiarygodność.</p><p>Rekomendujemy, aby na podstronie kontaktowej znajdowały się:</p><ul><li>pełna nazwa firmy,</li><li>forma prawna prowadzonej działalności np. sp. z o.o.,</li><li>NIP, REGON, KRS,</li><li>adres siedziby głównej.</li></ul><p>W drodze wyjątku, gdy KRS, NIP i REGON znajdują się już w stopce, nie ma potrzeby ich powielania w zawartości samej podstrony kontaktowej.</p><img src="images/3_2.png" width="500" alt="Dane rejestracyjne i adresowe">',
  },
  {
    id: 3.3,
    img: "/img/views/checklist-for-services/3.3.png",
    name: "Formularz kontaktowy",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Formularz kontaktowy</subheader><p>Formularz kontaktowy powinien przyspieszać kontakt, a nie go utrudniać. Użytkownik, który nie ma czasu na zalogowanie się do swojej skrzynki mailowej, skorzysta właśnie z formularza. Dlatego musi znajdować się on w widocznym miejscu na podstronie kontaktowej, czyli tam, gdzie intuicyjnie każdy go szuka.</p><p><strong>Rekomendujemy, aby ograniczyć liczbę pól do tych najważniejszych, np.:</strong></p><ul><li><strong>Imię i Nazwisko;</strong></li><li><strong>Adres e-mail;</strong></li><li><strong>Numer telefonu;</strong></li><li><strong>Wiadomość.</strong></li></ul><p>Umieszczenie na stronie formularza kontaktowego wymusza uzyskanie zgody na przetwarzanie danych osobowych (RODO). W tym celu pod formularzem należy utworzyć pole potwierdzające udzielenie zgody na wykorzystanie danych osobowych.</p><img src="images/3_3.png" width="500" alt="Formularz kontaktowy"><p><strong>Użytkownik musi mieć pewność, że jego wiadomość została poprawnie wysłana i dostarczona przez system.</strong> Dlatego formularz musi zawierać powiadomienia zarówno o wysłaniu wiadomości, jak i o błędzie. Najlepiej, gdy na mail osoby kontaktującej się będzie przesyłana kopia wiadomości, co będzie najlepszym potwierdzeniem wysłania wiadomości.</p>',
  },
  {
    id: 3.4,
    img: "/img/views/checklist-for-services/3.4.png",
    name: "Interaktywna mapa Google",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Interaktywna mapa Google</subheader><p>Umieszczenie interaktywnej mapki na podstronie kontaktowej jest obecnie obowiązującym trendem. Ten zabieg buduje zaufanie prowadzonej w internecie działalności w oczach potencjalnych klientów.</p><p><strong>Rekomendujemy, aby mapka wskazywała na zweryfikowaną w usłudze Google Moja Firma wizytówkę:</strong></p><img src="images/3_4.png" width="500" alt="Interaktywna mapa Google"><p>Oprócz funkcji wizerunkowej umieszczenie mapy Google wskazującej na zweryfikowaną wizytówkę może być mikroczynnikiem budującym zaufanie w wyszukiwarce Google. Co w dłuższej perspektywie czasu może przełożyć się na widoczność zdobytą przez stronę w organicznych wynikach wyszukiwarki Google. Szczególnie może mieć to znaczenie dla biznesów lokalnych</p>',
  },
  {
    id: 4,
    name: "Podstrona „O nas”",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Podstrona „O nas”</subheader><p>Często na podstawie podstrony „O nas” potencjalny klient dokonuje wyboru odnośnie skorzystania z usług w konkretnej firmie, ale nie tylko. Na jej podstawie oceny dokonują partnerzy biznesowi, czy przyszli pracownicy. Z tego powodu ta podstrona powinna być dostępna w górnym menu i stopce, gdyż najprawdopodobniej będzie to jedna z podstron, którą chętnie odwiedzi internauta na stronie internetowej.</p><p>Podstrona powinna stanowić pozytywny przekaz, spójny z branżą. Jej zawartość musi oddawać filozofię firmy, wartości, jakie ją charakteryzują, a nawet przedstawić pracowników.</p><p><strong>Udanym pomysłem na przedstawienie firmy w dobrym świetle jest wykorzystanie storytellingu. Polega on na opowiedzeniu historii firmy, jej działalności, osiągnięć, a nawet i słabości, które wydarzyły się w przeszłości. Takie podejście do budowania podstrony „O nas” pozwoli na wzbudzenie emocji u internauty i nawiązanie więzi, które mogą ułatwić nawiązanie współpracy.</strong></p><p>Najważniejsze to sprawić, aby podstrona była autentyczna, jej rolą jest ocieplanie wizerunku firmy. Dodatkowym atutem budującym zaufanie firmy jest wykorzystanie prawdziwych zdjęć personelu i siedziby firmy, zamiast korzystania z gotowych banków zdjęć. Trzeba pamiętać, że większość internautów to świadomi konsumenci, którzy z łatwością wyłapują fałsz.</p>',
  },
  {
    id: 5,
    name: "Podstrony ofertowe",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Podstrony ofertowe</subheader><p>Najważniejszymi funkcjami, jakie niosą podstrony ofertowe, jest przede wszystkim klarowne przekazanie informacji na temat oferty i pozyskanie klientów.</p><p>Warto nadmienić, że nie ma tu złotej reguły, w każdej branży podjęcie decyzji o skorzystaniu z oferty rządzi się swoimi prawami. W projekcie podstrony należy uwzględnić takie kwestie jak:</p><ul><li>obecność nagłówków,</li><li>formatowanie treści,</li><li>obecność unikalnych cech oferty - USP,</li><li>cenniki,</li><li>nawiązania do działania - CTA,</li></ul><p>W naszej analizie zweryfikowaliśmy obecność tych elementów na stronie.</p><p>Oprócz powyższych niezwykle istotne jest zaprezentowanie swojej firmy oraz usług, czy produktów w pozytywnym świetle, zwracając uwagę na istotne z perspektywy klienta kwestie takie jak: specyfikacja techniczna produktów, czy zaplecze sprzętowe wykorzystywane w procesie realizacji usług.</p>',
  },
  {
    id: 5.1,
    img: "/img/views/checklist-for-services/5.1.png",
    name: "H1 w obszarze ATF",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">H1 w obszarze ATF</subheader><p>Nagłówek H1 jest bardzo ważnym elementem nie tylko z perspektywy użytkownika, ale również SEO. To jeden z elementów, który świadczy o tematyce podstrony i ma bardzo duży wpływ na ranking strony organicznych wynikach wyszukiwania. </p><p>Dzięki nagłówkowi H1 widocznemu w obszarze ATF, czyli na pierwszym ekranie strony bez konieczności przewijania:</p><ul><li>Użytkownik może podjąć szybką decyzję czy odwiedzona podstrona odpowiada jego oczekiwaniom. Ważne, aby zawartość tego nagłówka faktycznie odpowiadała zawartości strony, użytkownik szybko zorientuje się gdy będziemy próbowali go oszukać np. oferując usługi na obszarze, który w rzeczywistości nie jest obsługiwany.</li><li>Wyszukiwarka internetowa z łatwością utożsamia podstronę z konkretnym tematem. Istnieją różne szkoły tworzenia nagłówków H1 na stronach internetowych, wszystko jest zależne od intencji webmastera i konkretnej branży. Przyjmuje się, ze nagłówki H1 powinny być krótkie i zwięzłe. Jest to rzecz jasna tylko jeden z wielu analizowanych przez mechanizm wyszukiwarki czynników, jest jednak umieszczony wysoko w hierarchi wartości.</li></ul><p>Od strony technicznej na każdej podstronie rekomendujemy umieszczenie tylko jednego nagłówka, powinien też być pierwszym nagłówkiem występującym „od góry” w kodzie źródłowym strony internetowej. Zalecamy, aby szablon graficzny strony był zaprojektowany tak, aby nagłówek znalazł się w górnej części ekranu.</p><img src="images/5_1.png" width="500" alt="H1 w ATF">',
  },
  {
    id: 5.2,
    name: "Formatowanie treści",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Formatowanie treści</subheader><p>Z reguły internauci niechętnie czytają treści poniżej obszaru Above The Fold, czyli pod częścią strony, która załadowała się po wejściu i wymaga skrolowania. Aby zwiększyć ich zaangażowanie należy wzbudzić ciekawość i przyciągnąć wzrok.</p><p>Należy unikać tzw. ściany tekstu. Treść powinna być podzielona na mniejsze bloki i dodatkowo urozmaicona np. zdjęciami, listami punktowanymi i śródtytułami w formie nagłówków H2 i H3, które ułatwiają czytanie.</p><p>Grafiki umieszczone w treści powinny być wyróżnikiem i zachętą do skorzystania z oferty. Trzeba dopasować się do oczekiwań klienta i branży. Często większe zaufanie wzbudzają prawdziwe zdjęcia realizacji niż te pobrane z gotowych banków zdjęć, które w zasadzie nic nie mówią o firmie i jej doświadczeniu.</p><p>Wszystkie linki w treści np. odesłania do pozostałej oferty, cenników, czy portfolio muszą być dobrze widoczne, powinny odróżniać się kolorystycznie od reszty treści tak aby użytkownik mógł bez przeszkód je dostrzec.</p><p>Dobrze jest stosować pogrubienia ważnych zwrotów np. śródtytułów, zdań poprzedzających tabele i listy punktowane, czy zwroty "Call to Action".</p><p><strong>Trzeba pamiętać, aby formatowanie w obrębie całego serwisu było spójne i adekwatne do branży. Inaczej będzie sformatowana oferta kancelarii prawnej, pizzerii, czy przedszkola dla dzieci z autyzmem.</strong></p>',
  },
  {
    id: 5.3,
    name: "USP - Unikalne cechy oferty",
    img: "/img/views/checklist-for-services/5.3.png",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">USP - Unikalne cechy oferty</subheader><p>USP (Unique Selling Proposition) to sekcja z unikalnymi cechami oferty. Ten element jest bardzo ważny przy konfrontacji z konkurencją. Trzeba wskazać swoją przewagę, pokazać czym wyróżnia się firma na tle konkurencji i dlaczego klient powinien skorzystać z usług właśnie Twojej firmy.</p><p><strong>Rekomendujemy, aby taka sekcja znajdowała się w widocznym miejscu w obszarze BTF (po przewinięciu strony), ale nie była zbyt absorbująca. W pierwszej chwili konsument musi poznać produkt lub usługę, a USP powinny stanowić wisienkę na torcie, która wpłynie na podjęcie ostatecznej decyzji.</strong></p><p>Przykłady USP:</p><ul><li>roczna gwarancja na wykonaną naprawę,</li><li>możliwość rezygnacji w ciągu 30 dni,</li><li>darmowy zwrot,</li><li>wysyłka w 24h,</li><li>rabat na pierwsze zakupy,</li><li>dodatkowy rok gwarancji,</li><li>10 lat doświadczenia,</li><li>kosmetyki w 100% naturalne.</li></ul><img src="images/5_3.png" width="500" alt="USP"><p>Odpowiednie wyeksponowanie unikalnych cech oferty pozwoli na osiągnięcie przewagi konkurencyjnej, co w konsekwencji przyczyni się do wzrostu konwersji.</p>',
  },
  {
    id: 5.4,
    img: "/img/views/checklist-for-services/5.4.png",
    name: "Cenniki",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Cenniki</subheader><p>Cennik może działać dwojako. Czasem jego brak może zwiększyć ilość zapytań, z drugiej strony jego zamieszczenie na stronie może dostarczyć wysokiej jakości świadomych klientów.</p><p>Nie w każdej branży umieszczenie cennika ma sens lub jest możliwe ze względu na stopień skomplikowania oferty. Jego obecność może doprowadzić do konkurowania ceną, a nie jest to jedyny aspekt, wg którego potencjalny klient podejmuje decyzję o skorzystaniu z usług. Za wyższą ceną może stać jakość, większe doświadczenie czy inne czynniki zwiększające koszt realizacji usług.</p><img src="images/5_4.png" width="500" alt="Cenniki"><p>Obecność cennika na stronie nie jest obojętna dla SEO. Cennik może przyczynić się do zwiększenia zasięgu strony internetowej. Dodanie na każdej podstronie ofertowej cennika to pierwszy krok do zwiększenia widoczności o frazy long tail z dopiskiem:</p><ul><li>cena,</li><li>ceny,</li><li>koszt,</li><li>cennik itd.</li></ul><p>Jeśli produkt, bądź usługa na stronie internetowej posiada darmowy okres próbny, również warto o tym poinformować klientów.</p>',
  },
  {
    id: 5.5,
    img: "/img/views/checklist-for-services/5.5.png",
    name: "CTA - nawiązania do działania",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">CTA - nawiązania do działania</subheader><p>W marketingu wezwanie do działania (CTA - Call to Action) jest rodzajem krótkiego komunikatu, którego celem jest przekonanie odbiorcy do podjęcia określonego działania np.:</p><ul><li>założenia konta,</li><li>zapisania się do newslettera,</li><li>pobrania materiałów promocyjnych (np. darmowego e-booka),</li><li>nawiązania kontaktu.</li></ul><p>Najpopularniejsze CTA to zazwyczaj krótkie, nierzadko dwu- lub jednowyrazowe zwroty typu: „Kup teraz”, „Zamów”, „Odbierz prezent” czy „Sprawdź”. Aby wzmocnić sugestywność przekazu oraz upewnić klienta o zasadności wykonania akcji, wezwanie do działania często zakończone jest wykrzyknikiem.</p><p>Należy zadbać o to, aby nawiązanie do działania było dobrze widoczne, nie przyniesie żadnego rezultatu gdy nie będzie odpowiednio wyeksponowane. Należy pamiętać o odpowiednim kontraście CTA na tle reszty strony i o odpowiednim otoczeniu. CTA to nie tylko przycisk, ale również sposób na eliminację wątpliwości użytkownika, co do słuszności wykonywanej akcji.</p><img src="images/5_5.png" width="500" alt="CTA">',
  },
  {
    id: 6,
    name: "Wpisy blogowe",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Wpisy blogowe</subheader><p>Rekomendujemy aktywne prowadzenie bloga firmowego, ponieważ daje całą masę korzyści, zarówno wizerunkowych, jak i typowych dla widoczności organicznej. Blog buduje zaufanie i kreuje pozycję lidera. Dobrze opracowane tematy stawiają firmę w dobrym świetle. Ponadto wpisy mogą generować dodatkowy ruch – wtedy stanowią kolejny kanał konwersji dzięki promocji usług za pośrednictwem grafik nawiązujących do działania. Przykłady to:</p><ul><li>wyróżniona oferta tematyczna do wpisu,</li><li>promocje, kody rabatowe,</li><li>odnośniki do podstron usługowych, ofertowych.</li></ul><p>Z perspektywy SEO podstawowym zadaniem bloga jest poprawa Topical Authority dla całej domeny. Dzieje się to dzięki publikacji treści powiązanych tematycznie z oferowanymi usługami. Rozbudowa bloga o tematyczne wpisy pośrednio przyczynia się do wzmocnienia podstron ofertowych, właśnie dzięki wzmocnieniu całej domeny. W toku optymalizacji strony wpisy blogowe mogą poprawiać linkowanie wewnętrzne dzięki umieszczaniu w nich produktów wyróżnionych i linków do kategorii, a dodatkowo, gdy treści są przydatne dla użytkowników, mogą w dłuższej perspektywie dać linki przychodzące umieszczone przez społeczność np. na forach dyskusyjnych.</p><p>Przykładowe tematy, jakie można poruszać podczas tworzenia wpisów blogowych:</p><ul><li><strong>odpowiedzi na często zadawane pytania</strong>, np. Jak zamontować poprawnie roletę bezinwazyjną?</li><li><strong>wydarzenia w firmie</strong>, np. Relacja z targów zdrowej żywności,</li><li><strong>testy i porównania produktów</strong>, np. Który smartfon kupić w cenie 3000 zł?</li><li><strong>pozytywna odpowiedź na zły PR w internecie</strong>, np. Kłopoty z przegrzewaniem się Laptopa XYZ? Pobierz najnowsze sterowniki,</li><li><strong>aktualności branżowe.</strong></li></ul><p>Więcej informacji:</p><p><a href="https://www.grupa-tense.pl/blog/10-podstawowych-zasad-pisania-firmowego-bloga/">https://www.grupa-tense.pl/blog/10-podstawowych-zasad-pisania-firmowego-bloga/</a></p><p><a href="https://www.grupa-tense.pl/blog/jak-pozycjonowac-blog-seo-dla-bloga-krok-po-kroku/">https://www.grupa-tense.pl/blog/jak-pozycjonowac-blog-seo-dla-bloga-krok-po-kroku/</a></p>',
  },
  {
    id: 6.1,
    img: "/img/views/checklist-for-services/6.1.png",
    name: "Formatowanie wpisów",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Formatowanie wpisów</subheader><p>Redagując wpisy blogowe, należy dbać o odpowiednią hierarchię treści. Tytuł główny artykułu musi zostać otagowany nagłówkiem H1, a następnie śródtytuły nagłówkami niższego poziomu H2 i H3, w zależności od intencji. O to przykładowa dobrze zaplanowana hierarchia:</p><img src="images/6_1.png" width="500" alt="Nagłówki"><p>Należy dbać, aby posty blogowe były czytelne. Z tego powodu nie mogą przypominać wielkich bloków treści – trzeba pamiętać o podziale na akapity co ok. 400 do 500 znaków. Średnio co 2 akapity powinien znajdować się śródtytuł w formie nagłówka H2 lub H3, a dodatkowej czytelności dostarczą tabele i listy punktowane.</p><p>Każdy wpis powinien posiadać grafikę wyróżniającą go na podstronie z listą postów. Posłuży ona też jako obrazek wyróżniający podczas publikacji wpisu na portalach społecznościowych.</p><p>Więcej informacji:</p><p><a href="https://www.grupa-tense.pl/blog/10-podstawowych-zasad-pisania-firmowego-bloga/">https://www.grupa-tense.pl/blog/10-podstawowych-zasad-pisania-firmowego-bloga/</a></p><p><a href="https://www.grupa-tense.pl/blog/jak-pozycjonowac-blog-seo-dla-bloga-krok-po-kroku/">https://www.grupa-tense.pl/blog/jak-pozycjonowac-blog-seo-dla-bloga-krok-po-kroku/</a></p>',
  },
  {
    id: 6.2,
    name: "Nawiązania do działania w treści",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Nawiązania do działania w treści</subheader><p>Poprawnie zredagowane i sformatowane wpisy na blogu będą zdobywać widoczność organiczną. Im wyższa będzie ich pozycja, tym większy ruch mogą generować.</p><p>Użytkownika z bloga można przekształcić w klienta dzięki umieszczeniu we wpisach odpowiednich elementów CTA nawiązujących do działania.</p><p>Rekomendujemy, aby:</p><p><strong>Zachęcać czytelnika do skorzystania z oferowanych usług. </strong>W tym celu warto stworzyć kilka bannerów graficznych, które będą w przyszłości umieszczane pomiędzy akapitami we wpisach blogowych. Taki banner musi wyróżniać się graficznie na tle reszty strony i powinien powielać się nawet kilka razy w długich wpisach. Banner powinien zachęcać do wykonania pierwszego kroku np. przejścia na podstronę z tematyczną ofertą lub skontaktowania się w celu przedstawienia oferty.</p><p><strong>Tworzyć kody rabatowe i akcje promocyjne. </strong>Wpisy zawierające w sobie atrakcyjne akcje rabatowe mogą stać się nośnikiem budującym markę firmy dzięki społeczności „łowców okazji”. Dobrą praktyką będzie tworzenie okresowych kodów rabatowych na ściśle określony asortyment. Dzięki temu można nie tylko zwiększyć sprzedaż, ale również pozyskać naturalne linki lub wykorzystać takie akcje w dodatkowych publikacjach sponsorowanych.</p><p><strong>Umieścić w treści linki do kategorii  połączone z tekstowymi nawiązaniami do działania</strong> np. „sprawdź naszą ofertę <span style="text-decoration:underline;">mebli kuchennych na wymiar</span>”. Dobrą praktyką jest tworzenie linka z frazy, która może kierować do konkretnej podstrony. Tak realizowane linki wewnętrzne dodatkowo pomagają w budowaniu widoczności organicznej.</p>',
  },
  {
    id: 7,
    img: "/img/views/checklist-for-services/7.png",
    name: "Stopka",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Stopka</subheader><p>Stopka umieszczona u dołu strony internetowej jest miejscem użytecznym z dużym potencjałem. Muszą w niej znajdować się nie tylko te elementy, które wzbudzą zaufanie u klienta, ale również elementy wymagane przez obowiązujące prawo np. RODO i stanowiące funkcję informacyjną.</p><p>W ramach przeprowadzonej analizy weryfikujemy m.in. obecności linków do:</p><ul><li>najważniejszych podstron ofertowych,</li><li>istotnych podstron informacyjnych,</li><li>social media.</li></ul><p>Oprócz skróconego menu sprawdzamy również występowanie elementów social proof, czyli budujących zaufanie użytkownika, m.in.:</p><ul><li>danych teleadresowych,</li><li>danych rejestracyjnych działalności gospodarczej takich jak NIP/REGON,</li></ul><p>Oprócz powyższych elementów stopka może zostać wykorzystana do dodatkowej informacji dla klientów, np. o programach partnerskich lub aktualnych akcjach rabatowych.</p><img src="images/7_0.png" width="500" alt="Stopka">',
  },
  {
    id: 7.1,
    img: "/img/views/checklist-for-services/7.1.png",
    name: "Linki do social media w stopce",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Linki do social media w stopce</subheader><p>Obecność w social media jest nieodzownym elementem strategii budowania marki. Założenie konta na popularnych portalach takich jak Facebook czy Instagram stanowi dziś praktycznie obowiązek. Social media mogą powodować, że nie tylko budowanie marki, ale i stworzenie relacji z klientami będzie o wiele bardziej efektywne.</p><p>Za pośrednictwem przekazu w social mediach możesz informować potencjalnych klientów o rabatach, nowej ofercie czy na bieżąco obserwować ich reakcję na publikowane treści.</p><p>Aby poinformować swoich klientów o istnieniu profili na popularnych portalach social media, należy umieścić linki do nich w widocznych miejscach, w tym w stopce:</p><img src="images/7_1.png" width="500" alt="Stopka"><p><strong>Pamiętaj, że oprócz oczywistego budowania zaufania, portale społecznościowe mogą także wspomóc pozycjonowanie poprzez pozyskiwanie naturalnych linków. Po pierwsze, niektóre z umieszczonych tam linków do strony internetowej same w sobie niosą pewną wartość dla SEO, jak np. link z Facebooka. Po drugie, gdy podzielisz się w social mediach ciekawym materiałem ze swojej strony, istnieje szansa na to, że użytkownicy zaczną go między sobą przekazywać i w efekcie trafi on także do zewnętrznych źródeł, takich jak np. fora o danej tematyce.</strong></p><p>Biorąc pod uwagę, że link building stanowi nieodłączny element skutecznego pozycjonowania, pozyskane w ten naturalny sposób odnośniki wpływają pozytywnie na SEO.</p>',
  },
  {
    id: 7.2,
    img: "/img/views/checklist-for-services/7.2.png",
    name: "Skrócone menu oferty w stopce",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Skrócone menu oferty w stopce</subheader><p>Dolne menu ma dwie zalety</p><ul><li><strong>użytkową</strong>: ułatwia nawigację w obrębie serwisu,</li><li><strong>SEO</strong>: poprawia moc podstron, dzięki zastosowaniu linków sitewide (znajdujących się w obrębie całego serwisu).</li></ul><p>Rekomendujemy, aby w dolnym menu umieścić najważniejsze podstrony ofertowe. Nie muszą to być podstrony agregujące całą ofertę, lepiej dla wzmocnienia podstron można w tych linkach zamieścić kluczowe usługi znajdujące się na głębszych poziomach, na których widoczności zależy nam w szczególności.</p><img src="images/7_2.png" width="500" alt="Stopka">',
  },
  {
    id: 7.3,
    img: "/img/views/checklist-for-services/7.3.png",
    name: "Menu podstron informacyjnych w stopce",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Menu podstron informacyjnych w stopce</subheader><p>Istotnym elementem nawigacji na stronie internetowej jest dolne menu znajdujące się w stopce, zawierające odnośniki do najważniejszych podstron informacyjnych.</p><p><strong>Rekomendujemy, aby w stopce znajdowały się linki do następujących podstron:</strong></p><ul><li>Polityka prywatności, bądź RODO;</li><li>Kontakt;</li><li>Portfolio realizacji;</li><li>Cennik.</li></li></ul><p><strong>W razie potrzeby (zależnie od typu działalności) nawet:</strong></p><ul><li>Logowanie i Rejestracja;</li><li>Możliwość odstąpienia od usługi, zakupów;</li><li>Regulamin;</li></li></ul><img src="images/7_3.png" width="500" alt="Stopka"><p>To menu można określić jako sekcję <strong>Pomoc</strong>. Dodatkowym elementem wyróżniającym może być zakładka FAQ z pytaniami często zadawanymi przez potencjalnych klientów np.:</p><ul><li>Jaki sprzęt fotograficzny wykorzystuję w sesjach plenerowych?</li><li>Jak prawidłowo zmierzyć okno przed zamówieniem firany?</li><li>Ile trwa oklejenie auta folią zmieniającą kolor karoserii?</li></ul>',
  },
  {
    id: 7.4,
    img: "/img/views/checklist-for-services/7.4.png",
    name: "Dane kontaktowe i adres w stopce",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Dane kontaktowe i adres w stopce</subheader><p>Rekomendujemy, aby w stopce znalazły się kluczowe dane kontaktowe, tj. nr telefonu i mail. Zalecamy umieszczenie w stopce adresu działalności, który buduje wiarygodność firmy w oczach tych klientów, którzy obawiają się próby oszustwa. Dodatkowym atutem jest umieszczenie numerów identyfikujących firmę, czyli NIP i REGON.</p><p>Należy pamiętać, aby każdy zamieszczony w stopce numer telefonu i adres mailowy był klikalnym hiperłączem z odpowiednim protokołem, na przykład:</p><ul><li>numery telefonów: <strong>&lt;a href="tel:48123123123">+48 123 123 123&lt;/a></strong></li><li>adresy mailowe <strong>&lt;a href="mail:<a href="mailto:kontakt@domena.pl">kontakt@domena.pl</a>">kontakt@domena.pl&lt;/a></strong></li></ul><p>Tak osadzone hiperłącza ułatwiają nawiązanie połączenia użytkownikom mobilnym np. klikając na numer telefonu, smartfon automatycznie nawiąże połączenie.</p><img src="images/7_4.png" width="500" alt="Stopka">',
  },
  {
    id: 8,
    name: "Bezpieczeństwo i zaufanie",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Bezpieczeństwo i zaufanie</subheader><p>W dziale Bezpieczeństwo i zaufanie skupimy się na elementach budujących zaufanie strony internetowej w oczach potencjalnych klientów. Mogą one mieć duży wpływ na podjęcie ostatecznej decyzji o nawiązaniu współpracy czy podjęciu próby kontaktu.</p><p>Zweryfikujemy obecność takich elementów jak:</p><ul><li>certyfikat SSL,</li><li>powiadomienia o wykorzystaniu plików cookies,</li><li>polityka prywatności lub informacja RODO.</li></ul><p>Większość spośród wymienionych elementów to formalności, których musi dopełnić każdy właściciel strony internetowej.</p>',
  },
  {
    id: 8.1,
    img: "/img/views/checklist-for-services/8.1.png",
    name: "Certyfikat SSL",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Certyfikat SSL</subheader><p>Certyfikat SSL na stronie internetowej jest nieodłącznym elementem zabezpieczeń. Oprócz funkcji zabezpieczającej jest najważniejszym elementem budującym zaufanie. Jego zadaniem jest szyfrowanie danych przesyłanych przez przeglądarkę, np. danych osobowych podanych w formularzu kontaktowym.</p><p><strong>Wdrażając certyfikat SSL na stronie internetowej, trzeba pamiętać o automatycznym przekierowaniu 301 wersji niezabezpieczonych z przedrostkiem „http://” do wersji z certyfikatem „https://”. Może się zdarzyć sytuacja, że zamiast zielonej kłódki w pasku adresu występuje powiadomienie o braku zabezpieczeń. Takie powiadomienie będzie również widoczne, jeśli certyfikat jest wdrożony poprawnie, ale na stronie występuje tzw. mixed content, czyli część zasobów (np. grafiki) ładują się bez wykorzystania certyfikatu SSL – wtedy trzeba poprawić linki do wszystkich zasobów. </strong></p><img src="images/8_1.png" width="500" alt="SSL"><p>Dla każdej strony internetowej rekomendujemy posiadanie certyfikatu minimum DV, czyli Domain Validation – takie certyfikaty kosztują zwykle niewiele, bo kilkadziesiąt złotych, a gwarantują bezpieczeństwo transakcji. Cechuje je tzw. kłódeczka w pasku adresu, ale nie wyświetla się nazwa organizacji, jak ma to miejsce na stronie banku.</p><p>Certyfikat SSL oprócz samego zabezpieczenia wpływa również pozytywnie na ranking strony w wynikach wyszukiwania.</p>',
  },
  {
    id: 8.2,
    name: "Powiadomienie o ciasteczkach",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Powiadomienie o ciasteczkach</subheader><p>Ciasteczka (tzw. cookies) to małe pliki zapisywane w pamięci przeglądarki internetowej przez stronę internetową. Mają za zadanie zapamiętywać sesję użytkownika, np. konfigurację strony lub jego identyfikator na potrzeby tworzenia statystyk. Są różne typy ciasteczek, niektóre kasują się automatycznie po wyłączeniu przeglądarki lub upływie konkretnego czasu.</p><p><strong>Zgodnie z ustawą Prawa Telekomunikacyjnego z dnia 22 marca 2013 roku, która mówi o obowiązku informacyjnym odnoszącym się do przetwarzania plików cookies, trzeba uzyskać zgodę internauty do wykorzystania tzw. ciasteczek na stronie internetowej. Celem tej regulacji ma być zwiększenie świadomości użytkowników na temat stosowanych technologii gwarantujących dostarczanie treści lepiej dostosowanej do ich preferencji i zainteresowań.</strong></p><p>Informację o ciasteczkach trzeba umieścić zawsze, gdy strona:</p><ul><li>wykorzystuje ciasteczka do zapamiętywania sesji, np. logowania,</li><li>pamięta spersonalizowane ustawienia użytkowników, np. ustawienie języka,</li><li>korzysta z narzędzi do statystyk, np. Google Analytics,</li><li>korzysta z narzędzi firm trzecich, np. do chatu na stronie.</li></ul><p>Powiadomienie powinno wyświetlać się w obrębie całej strony internetowej do momentu zaakceptowania przez użytkownika. W synergii z SEO popup informujący o ciasteczkach nie może zakrywać całej strony, nie zaleca się też zaciemniania strony.</p>',
  },
  {
    id: 8.3,
    name: "Polityka prywatności + informacja o RODO",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Polityka prywatności + informacja o RODO</subheader><p>Polityka prywatności stanowi jedną z wielu formalności obowiązkowych dla właściciela sklepu online, ale dotyczy również stron internetowych. Jej zadaniem jest poinformowanie użytkowników o sposobie oraz celu przetwarzania i wykorzystywania ich danych osobowych np. przesyłanych podczas korzystania z formularzy kontaktowych, czy zbieranych na potrzeby statystyczne.</p><p><strong>Dokument polityki prywatności oprócz spełnienia obowiązku informacyjnego wynikającego z ustawy o ochronie danych osobowych, ustawy prawa telekomunikacyjnego i rozporządzenia RODO, jest jednym z elementów budowania zaufania użytkowników. Zawarte są w nim informacje o przedsiębiorcy i przedstawione prawa, jakie użytkownik ma do swoich danych. Wyjaśnia on też kwestię potrzeby zbierania takich danych.</strong></p>      <p>Na potrzeby naszej analizy sprawdziliśmy, czy polityka prywatności znajduje się na stronie i czy została podlinkowana w stopce. W celu weryfikacji poprawności prawnej pod kątem przepisów RODO zalecamy konsultację z prawnikiem.</p><p>Ciekawostka: jeżeli strona internetowa nie zbiera danych (np. prosta strona firmowa bez formularza kontaktowego i kodu śledzenia), nie zachodzi obowiązek publikacji takiego dokumentu. Jeśli jednak na stronie zostanie zainstalowany kod śledzący, np. Google Analytics lub HotJar, który służy do profilowania użytkowników, to taki obowiązek już jest.</p>',
  },
  {
    id: 9,
    name: "Odbiór strony przez użytkowników",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Odbiór strony przez użytkowników</subheader><p>W tym module zweryfikujemy elementy, które mogą mieć negatywny wpływ na odczucia użytkowników podczas korzystania ze strony internetowej. Poddamy weryfikacji m.in.:</p><ul><li>optymalny czas pełnego załadowania się strony,</li><li>występowanie irytujących wyskakujących okienek,</li><li>błędy utrudniające korzystanie ze strony www, np.:<ul><li>nachodzenie elementów,</li><li>zbyt małe elementy. </li></ul></li></ul><p>Weryfikowane elementy nie zawsze są oczywiste, ale każdy z wymienionych powyżej może spowodować rosnącą irytację użytkownika, która finalnie doprowadzi do opuszczenia strony internetowej.</p><p>Takie elementy jak niepoprawnie działający interfejs graficzny czy długi czas odpowiedzi serwera mogą z perspektywy potencjalnego klienta sprawiać wrażenie, że strona internetowa jest  niedopracowana. To niesie za sobą ogromne zagrożenie – obniża zainteresowanie ofertą.</p>',
  },
  {
    id: 9.1,
    img: "/img/views/checklist-for-services/9.1.png",
    name: "Optymalny czas pełnego załadowania się strony",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Optymalny czas pełnego załadowania się strony</subheader><p>Zapoznając się z ofertą, przyszły klient przegląda podstronę po podstronie. Wolno działający serwis może generować bardzo wysoki współczynnik odrzuceń. Długi czas ładowania się strony internetowej powoduje frustrację, co może mocno wpłynąć na zainteresowanie ofertą.</p><p>Przyjmuje się, że optymalny czas odpowiedzi serwera TTFB, czyli do pobrania pierwszego bajta strony internetowej, powinien wynosić poniżej 200 ms, a zgodnie z nowymi wytycznymi Core Web Vitals, pierwsza interakcja na stronie powinna być możliwa w ciągu 100ms.</p><img src="images/9_1.png" width="500" alt="Page Speed"><p>Prędkość działania strony oprócz samego odbioru strony przez użytkowników ma bezpośredni wpływ na pozycje osiągane przez stronę internetową. Dlatego, jeśli nie da się poprawić wyników, optymalizując kod źródłowy strony, trzeba zastanowić się nad zwiększeniem pakietu serwera hostingowego lub rozważyć migrację na inny – szybszy serwer. Nie jest to możliwe w przypadku stron typu SaaS. Konieczna jest wtedy konsultacja z dostawcą oprogramowania i znalezienie odpowiedniego rozwiązania.</p><p>Więcej informacji na temat wydajności znajduje się pod poniższym linkiem:</p><p><a href="https://developers.google.com/speed/pagespeed/insights/?hl=pl">https://developers.google.com/speed/pagespeed/insights/?hl=pl</a></p>',
  },
  {
    id: 9.2,
    img: "/img/views/checklist-for-services/9.2.png",
    name: "Niepoprawnie działające wyskakujące okienka",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Niepoprawnie działające wyskakujące okienka</subheader><p>Wyskakujące okienka, tzw. popup, służą do wyświetlania dodatkowego elementu call to action, np. prośby o pozostawienie numeru telefonu lub zapisanie się do newslettera. Mogą również informować o bieżących promocjach lub cenzurować zawartość w przypadku użytkowników niepełnoletnich.</p><p>Typowym błędem powodującym złe zachowanie się okienek w sklepie jest niezapisanie informacji w plikach pamięci przeglądarki, tzw. cookies, które pamiętają zamknięcie okna.</p><p>Ważne też, aby zamknięcie wyskakującego okienka było możliwie intuicyjne. Nie stosuje się niewidocznych przycisków zamykania ani nie umieszcza ich w nieintuicyjnym miejscu, np. na dole. Wyjątek stanowią okienka cenzurujące treść, np. w branży erotycznej lub alkoholowej, gdzie zachodzi konieczność potwierdzenia pełnoletności przed wyświetleniem treści strony.</p><img src="images/9_2.png" width="500" alt="Okienka"><p>Jeśli test nie został zaliczony, rekomendujemy, aby wyzwalanie okienek było przemyślane. Wszystkie okienka nie mogą pojawiać się od razu po załadowaniu strony. Należy ustawić odpowiednie wyzwalacze, opierając się na czasie i zachowaniu użytkownika, np. przejście przez 2 podstrony, czas minimum 45 sekund od wejścia na stronę i ruch kursorem do górnej belki przeglądarki (chęć opuszczenia strony).</p><p>Trzeba pamiętać, aby przycisk zamykania okienka "X" znajdował się w prawym górnym rogu. To naturalne miejsce, w którym spodziewają się go użytkownicy. Dobrą praktyką jest automatyczne zamknięcie okienka po kliknięciu obszaru poza okienkiem.</p>',
  },
  {
    id: 9.3,
    img: "/img/views/checklist-for-services/9.3.png",
    name: "Elementy nachodzące na siebie, błędy renderowania",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Elementy nachodzące na siebie, błędy renderowania</subheader><p>Błędy renderowania interfejsu graficznego mogą powodować problemy z obsługą strony lub zwyczajnie doprowadzać do dezorientacji użytkowników. Występowanie takich niedociągnięć sprawia wrażenie niedokończonego serwisu w wersji roboczej.</p><p>Nachodzące elementy mogą wynikać z błędów konstrukcji w stylach CSS lub konfliktów JavaScript.</p><img src="images/9_3.png" width="500" alt="Błędy renderowania"><p>Jeśli ten test nie został zaliczony, to rekomendujemy, aby podczas projektowania szablonu strony unikać w stylach CSS pozycjonowania elementów na stronie w sposób absolutny i przekazać do swojego webmastera prośbę o zweryfikowanie występowania na stronie konfliktów JavaScript.</p>',
  },
  {
    id: 9.4,
    img: "/img/views/checklist-for-services/9.4.png",
    name: "Zbyt małe czcionki",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Zbyt małe czcionki</subheader><p>Projektując stronę internetową, trzeba mieć na uwadze czytelność treści. Często spotykanym zabiegiem jest umieszczanie treści wspomagających pozycjonowanie serwisu tak, aby były ukryte dla użytkownika lub niezbyt absorbujące podczas obsługi.</p><img src="images/9_4.png" width="500" alt="Małe czcionki">><p>Jeżeli ten test nie został zaliczony, rekomendujemy, aby czcionki na stronie internetowej nie były mniejsze niż 11 pikseli.</p><p>Oprócz samej wielkości tekstu należy zwrócić uwagę na ogólne formatowanie:</p><ul><li>unikanie ścian tekstu,</li><li>podział na akapity,</li><li>zastosowanie śródtytułów (H2/H3),</li><li>listy punktowane.</li></ul><p>Powyższe elementy nadają ogólnej czytelności i ułatwiają nawigację wzrokową w celu szybszego wyłapania istotnych kwestii.</p><p>',
  },
];

export const textData = {
  introduction:
    "<p>Przygotowaliśmy analizę strony internetowej pod kątem interfejsu użytkownika. Zawarliśmy w niej najważniejsze z punktu widzenia użytkownika elementy, które korelują z przyzwyczajeniami potencjalnych klientów. Staraliśmy się wyłapać te kwestie, które mogą utrudniać obsługę i obniżać chęć skorzystania z Państwa oferty.</p><p>Analizę przeprowadziliśmy na podstawie zbioru ogólnoprzyjętych reguł i własnych doświadczeń. W zależności od potrzeb weryfikujemy poprawność w zakresie najważniejszych elementów:</p><ul><li>wersji mobilnej,</li><li>nagłówka strony,</li><li>użyteczności podstron ofertowych,</li><li>wpisów blogowych,</li><li>podstrony kontaktowej,</li><li>użyteczności stopki,</li><li>elementów budujących zaufanie,</li><li>elementów odpowiedzialnych za bezpieczeństwo,</li><li>odbioru strony przez użytkowników.</li></ul><p>Dzięki naszemu raportowi dowiesz się, co trzeba poprawić w kwestii interfejsu Twojej strony.</p><p>Prezentowany raport stanowi wstęp do procesu CRO (ang. Conversion Rate Optimization), czyli poprawiania biznesowej skuteczności strony internetowej poprzez podniesienie współczynnika konwersji.</p><p><strong>Jeśli jesteś zainteresowany pełnym Audytem UX z uwzględnieniem badania zachowań użytkowników na Twojej stronie, koniecznie skontaktuj się z nami. Przedstawimy Ci dostępne możliwości.</strong></p>",
};

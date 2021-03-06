export const pointsIncoming = [
  {
    id: 1,
    img: "/img/views/checklist-for-ecommerce/1.png",
    name: "Wersja mobilna",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Wersja mobilna</subheader><p><strong>Zgodnie z badaniami serwisu BroadBandSearch urządzenia mobilne stanowią ponad połowę całego ruchu wyszukań organicznych.</strong></p><img src="images/1.0.png" width="500" alt="Wersja mobilna"><p>Wraz ze wzrostem udziału urządzeń mobilnych w ruchu internetowym, Google w marcu 2018 roku oficjalnie zaczął wdrażać w życie mobile first index. Od tego czasu systemy do crawlowania coraz częściej rozpoczynają skanowanie strony mobilną wersją GoogleBota, symulując wejście z urządzenia mobilnego, zamiast z komputera stacjonarnego.</p><p><strong>Wdrożenie Mobile-First spowodowane rosnącą liczbą użytkowników mobilnych sprawia, że punktem wyjścia dla obliczenia rankingu strony w wyszukiwarce stanie się właśnie wersja mobilna. Według oficjalnych informacji punktem zwrotnym jest marzec 2021, kiedy to Mobile First powinien objąć bez wyjątku wszystkie strony w internecie.</strong></p><p>O wersję mobilną warto dbać nie tylko dla wyszukiwarki Google, ale również przez wzgląd na użytkowników korzystających z urządzeń mobilnych. Jej obecność ułatwia użytkownikom interakcję i umożliwia finalizację transakcji z poziomu smartfona. Jest jednym z wielu elementów, które mają wpływ m.in. na konwersję.</p><p>Podczas naszej analizy, sprawdziliśmy najważniejsze elementy, które zostaną omówione w kolejnych punktach.</p>',
  },
  {
    id: 1.1,
    img: "/img/views/checklist-for-ecommerce/1.1.png",
    name: "Dostosowanie do urządzeń mobilnych",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Dostosowanie do urządzeń mobilnych</subheader><p><strong>Urządzenia mobilne od komputera dzieli nie tylko rozmiar ekranu, ale też całkiem odmienny sposób obsługi. Użytkownik mobilny nie korzysta z myszki i klawiatury – najczęściej nawiguje po stronie kciukiem.</strong></p><img src="images/1.1.png" width="500" alt="Dostosowanie do urządzeń mobilnych"><p>Urządzenia mobilne cechuje mniejsza wydajność od tradycyjnego komputera i często różne urządzenia różnią się między sobą obsługiwanymi technologiami. Różnice wynikają z różnorodności mobilnych systemów operacyjnych, mnogości ich wersji i innych przeglądarek. Z tego powodu strona musi być możliwie uniwersalna.</p><p>Aby zaliczyć test dopasowania do urządzeń mobilnych, trzeba spełnić poniższe warunki:</p><ol><li><strong>Rozmiar tekstu musi być dopasowany do widocznego obszaru</strong> – należy unikać konieczności przewijania ekranu w poziomie. Treść musi się tak układać na stronie, żeby była widoczna w całości. Dopuszcza się tylko przewijanie w pionie.</li><li><strong>Czcionka nie powinna utrudniać czytania tekstu</strong> – Czcionka powinna mieć taki rozmiar, aby bez potrzeby powiększania ekranu dało się przeczytać zawartość strony. Przyjmuje się minimum 11px.</li><li><strong>Elementy klikalne nie powinny być zbyt blisko siebie</strong> – obsługa kciukiem wymusza większe odległości pomiędzy elementami klikalnymi, np. pozycjami w menu.</li><li><strong>Na stronie nie mogą występować obiekty typu Flash</strong> –  to technologia wyparta na rzecz HTML5 i JavaScript. Flash nigdy nie był zbytnio wspierany przez urządzenia mobilne, dlatego nie należy go stosować. Strona musi być zaprojektowana z użyciem nowoczesnych technologii.</li></ol><p>Więcej informacji dostępnych jest pod adresem: <a href="https://search.google.com/test/mobile-friendly?hl=pl">https://search.google.com/test/mobile-friendly</a></p><p></p>',
  },
  {
    id: 1.2,
    img: "/img/views/checklist-for-ecommerce/1.2.png",
    name: "Poprawność skalowania (responsywność)",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Poprawność skalowania (responsywność)</subheader><p>Google zaleca projektowanie stron w technologii responsywnej. Użycie techniki responsywnego projektowania strony sprawia, że dopasowuje się ona automatycznie do szerokości ekranu urządzenia. Dzięki takiemu zabiegowi jej zawartość jest czytelna i łatwa w obsłudze zarówno na telefonie komórkowym, jak i monitorze komputera stacjonarnego.</p><p></p><img src="images/1.2.png" width="500" alt="Poprawność skalowania (responsywność)"><p></p><p><strong>Zabrania się użycia elementów o stałej szerokości. Urządzenia mobilne posiadają wirtualny rozmiar ekranu, np. iPhone używa wirtualnej szerokości 320px, co znaczy, że ustawienie w CSS szerokości obiektu np. na 600px spowoduje konieczność przewijania w poziomie. Zaleca się użycia wielkości względnych wyrażonych w procentach np.</strong></p><p><strong>ŹLE:</strong><br>div.fullWidth {<br> <span style="background: #f8f810">width: 320px;</span><br>  margin-left: auto;<br>  margin-right: auto;<br>}<br><strong>DOBRZE:</strong><br>div.fullWidth {<br> <span style="background: #f8f810">width: 100%;</span><br>}<br>Więcej informacji: <a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive">https://developers.google.com/web/fundamentals/design-and-ux/responsive</a></p>',
  },
  {
    id: 1.3,
    img: "/img/views/checklist-for-ecommerce/1.3.png",
    name: "Elementy wychodzące za ekran",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Elementy wychodzące za ekran</subheader><p>W poprawnie działającej wersji responsywnej strony www każdy element musi mieścić się w obszarze roboczym przeglądarki internetowej bez dodatkowego przewijania na boki.</p><img src="images/1.3.png" width="500" alt="Elementy wychodzące za ekran"><p><strong>Wychodzące poza ekran:</strong></p><ul><li><strong>nagłówki,</strong></li><li><strong>obrazki,</strong></li><li><strong>akapity treści,</strong></li><li><strong>elementy call to action,</strong></li><li><strong>dane kontaktowe,</strong></li><li><strong>menu,</strong></li></ul><p><strong>mogą powodować dezorientację użytkownika i obniżają zaufanie, ponieważ dają wrażenie, że strona internetowa nie działa lub opublikowano jej wersję roboczą. Takie błędy, choć z pozoru nieistotne, mogą irytować użytkownika i w konsekwencji zniechęcać do finalizacji zakupów.</strong></p><p>Pamiętaj, że sklep musi budzić zaufanie, aby potencjalny klient nie obawiał się np. kradzieży danych.</p>',
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
    img: "/img/views/checklist-for-ecommerce/2.png",
    name: "Nagłówek strony (header)",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Nagłówek strony (header)</subheader><p>Użytkownikami poruszającymi się po internecie kierują przyzwyczajenia. Z tego powodu strona internetowa powinna być zaprojektowana na podstawie zbioru ogólnie przyjętych reguł. Wszystko po to, aby obsługa była możliwie intuicyjna.</p><img src="images/2.0.png" width="500" alt="Nagłówek strony (header)"><p><strong>Odstępstwa od reguł mogą powodować niepotrzebną dezorientację i utrudnienia w korzystaniu ze sklepu. Gdy obsługa będzie zbyt absorbująca dla potencjalnego klienta, może mieć to negatywny wpływ na podjęcie decyzji o zakupie.</strong></p><p>W ramach przeprowadzonej analizy sprawdziliśmy najważniejsze punkty, m.in.:</p><ul><li>obecność danych kontaktowych w górnej belce,</li><li>łatwość interakcji,</li><li>obecność elementów budujących świadomość marki.</li></ul><p>Pamiętaj, że wykrycie w tej sekcji błędów wcale nie musi oznaczać, że strona jest trudna w odbiorze przez użytkowników. Liczy się też czytelność elementów, projekt graficzny adekwatny do branży i ogólne poczucie estetyki grafika. Jeśli wykryliśmy odstępstwa od reguł, to sygnalizujemy Ci możliwe problemy. </p><p>Aby przekonać się, czy interfejs jest trudny w odbiorze, konieczne jest przeprowadzenie pełnego audytu z badaniem zachowań. Skontaktuj się z nami, by uzyskać więcej informacji.</p>',
  },
  {
    id: 2.1,
    img: "/img/views/checklist-for-ecommerce/2.1.png",
    name: "Telefon",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Telefon</subheader><p><strong>Dla wielu użytkowników wykonanie telefonu jest bardziej praktyczne niż wysłanie wiadomości mailem. Często przed zakupem pojawiają się wątpliwości, które rozmowa telefoniczna potrafi rozwiać w ciągu zaledwie 30 sekund.</strong></p><p>Telefon jest jedną z wielu form potwierdzenia wiarygodności. Ma to szczególne znaczenie dla nowego sklepu, którego marka nie jest jeszcze rozpoznawalna w internecie. Czasem przed podjęciem decyzji o zakupie użytkownik czuje potrzebę upewnienia się, czy nowo powstały sklep rzeczywiście posiada produkt na stanie lub czy nie jest to próba zwyczajnego oszustwa.</p><p>Z myślą o użytkownikach mobilnych trzeba zadbać, aby numer telefonu był klikalnym hiperłączem z protokołem „tel:”, dzięki któremu na telefonie automatycznie zostanie nawiązane połączenie.</p><p>Przykład poprawnie stworzonego hiperłącza numeru telefonu:</p><p><strong>&lt;a href=”tel:48111222333”&gt;111 222 333&lt;/a&gt;</strong></p>',
  },
  {
    id: 2.2,
    name: "Mail",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Mail</subheader><p>Adres mailowy, który jest podstawowym kanałem kontaktu z klientami, nie tylko na etapie sprzedażowym, ale i w przypadku reklamacji, musi być umieszczony w widocznym miejscu. Preferujemy umieszczenie maila w nagłówku strony.</p><p>Należy pamiętać, aby mail był zawsze klikalnym hiperłączem z protokołem ‘mailto:’, dzięki niemu na telefonie automatycznie zostanie uruchomiony program mailowy, np. Gmail, a na komputerze program do obsługi poczty, np. Mozilla Thunderbird.</p><p>Przykład poprawnie stworzonego hiperłącza adresu mailowego:</p><p><strong>&lt;a href=”mailto:kontakt@moj-sklep.com”&gt;kontakt@moj-sklep.com&lt;/a&gt;</strong></p>',
  },
  {
    id: 2.3,
    img: "/img/views/checklist-for-ecommerce/2.3.png",
    name: "Logo sklepu",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Logo sklepu</subheader><p>Aby zdobyć rozpoznawalność i zostać zapamiętanym przez klientów trzeba wypracować swoją indywidualną markę – własną tożsamość. Od niej zależy, w jaki sposób klienci będą postrzegać sklep. Wybierając spośród wielu ofert, klienci najczęściej kierują się pierwszym wrażeniem, dlatego podczas tworzenia sklepu należy zadbać o odpowiednie elementy identyfikacji wizualnej. Jej umiejętne i konsekwentne stosowanie ułatwia budowanie świadomości marki.</p><p><strong>Najważniejszą część składową identyfikacji wizualnej sklepu internetowego stanowi logotyp. Liczy się nie tylko jego inspirujący projekt graficzny i nawiązanie do branży. Trzeba zadbać również o jego odpowiednie wyeksponowanie na stronie internetowej. Rozmieszczenie logotypu, jego tło i marginesy muszą być również zgodne z Twoją księgą znaku.</strong></p><img src="images/2.3.png" width="500" alt="Logo sklepu"><p>Miejscem typowym dla logotypu w sklepie internetowym jest nagłówek, a samo logo powinno być wyrównane do lewej strony. Dzięki takiemu układowi pozostaje dużo miejsca na umieszczenie koszyka, paska wyszukiwania czy najważniejszych danych kontaktowych.</p><p></p>',
  },
  {
    id: 2.4,
    name:
      "Menu z rozwijanymi podkategoriami, o strukturze silosów tematycznych",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Menu z rozwijanymi podkategoriami, o strukturze silosów tematycznych</subheader><p>Menu w sklepie internetowym musi składać się z tzw. struktury drzewiastej. Polega ona na wyznaczeniu kilku głównych silosów tematycznych, które stanowią kategorie nadrzędne. Na następnych poziomach występują kategorie o bardziej precyzyjnym dopasowaniu. Na przykładzie sklepu z elektroniką:</p><ul><li>AGD <ul><li>Zmywarki</li><li>Lodówki</li><li>...</li></ul></li><li>Fotografia <ul><li>Lustrzanki</li><li>Aparaty kompaktowe</li><li>...</li></ul></li><li>Komputery <ul><li>PC</li><li>Notebooki</li><li>...</li></ul></li></ul><p>Odpowiednia architektura informacji na stronie internetowej to ogromne ułatwienie dla użytkownika, który bez problemu odnajdzie właściwą kategorię z poszukiwanymi produktami.</p><p><strong>Przemyślany układ z podziałem na główne gałęzie tematyczne odgrywa ogromną rolę w budowaniu widoczności w wyszukiwarkach internetowych. Poprawny projekt struktury kategorii przyczynia się do umocnienia tematycznego autorytetu dla podkategorii w obrębie poszczególnych stosów tematycznych.</strong></p><p>Menu musi posiadać rozwijane podkategorie. Wtedy użytkownik bez wejścia w sekcję AGD zobaczy, czy w ofercie znajdują się np. zmywarki, a GoogleBot uzyska informację o zmywarkach już na stronie głównej, bez konieczności przejścia o poziom niżej.</p><p></p>',
  },
  {
    id: 2.5,
    img: "/img/views/checklist-for-ecommerce/2.5.png",
    name: "Linki do social media",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Linki do social media</subheader><p>Obecność w social media jest nieodzownym elementem strategii budowania marki. Założenie konta na popularnych portalach takich jak Facebook czy Instagram stanowi dziś praktycznie obowiązek. Social media mogą powodować, że nie tylko budowanie marki, ale i stworzenie relacji z klientami będzie o wiele bardziej efektywne.</p><p>Za pośrednictwem przekazu w social mediach możesz informować potencjalnych klientów o rabatach, nowej ofercie czy na bieżąco obserwować ich reakcję na publikowane treści.</p><p>Aby poinformować swoich klientów o istnieniu profili na popularnych portalach social media, należy umieścić linki do nich w widocznych miejscach.</p><img src="images/2.5.png" width="500" alt="Linki do social media"><p><strong>Pamiętaj, że oprócz oczywistego budowania zaufania, portale społecznościowe mogą także wspomóc pozycjonowanie poprzez pozyskiwanie naturalnych linków. Po pierwsze, niektóre z umieszczonych tam linków do strony internetowej same w sobie niosą pewną wartość dla SEO, jak np. link z Facebooka. Po drugie, gdy podzielisz się w social mediach ciekawym materiałem ze swojej strony, istnieje szansa na to, że użytkownicy zaczną go między sobą przekazywać i w efekcie trafi on także do zewnętrznych źródeł, takich jak np. fora o danej tematyce. </strong></p><p>Biorąc pod uwagę, że link building stanowi nieodłączny element skutecznego pozycjonowania, pozyskane w ten naturalny sposób odnośniki wpływają pozytywnie na SEO.</p>',
  },
  {
    id: 2.6,
    img: "/img/views/checklist-for-ecommerce/2.6.png",
    name: "Pole wyszukiwania",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Pole wyszukiwania</subheader><p>Wyszukiwarka w sklepie internetowym stanowi element konieczny. Musi mieć go każdy sklep, nieważne czy posiada 100 produktów, czy 10 tysięcy. Szczególnie ważny jest w sklepach specjalistycznych, zwłaszcza tych z dużą liczbą produktów w kategoriach. Aby się o tym przekonać, wystarczy odwiedzić dowolny sklep z drukarkami i spróbować odszukać bez wyszukiwarki czarny tusz hp 652.</p><p>Wyszukiwarka musi znajdować się w nagłówku sklepu w widocznym miejscu.</p><img src="images/2.6.png" width="500" alt="Pole wyszukiwania"><p><strong>Wewnętrzna wyszukiwarka daje klientowi dokładnie to, czego szuka. Dzięki temu ułatwia zakupy i może poprawiać konwersję. Część klientów woli użyć wewnętrznej wyszukiwarki, zamiast poruszać się po sklepie po omacku. </strong></p><p>Ma to szczególne znaczenie, kiedy sklep jest już na tyle rozpoznawalny w sieci, że ma ruch powracający. Użytkownik powracający zazwyczaj trafia na stronę główną sklepu, a nie do konkretnej kategorii jak w przypadku ruchu z wyników organicznych. Wtedy nie tylko poprawnie skonstruowane menu, ale również wyszukiwarka ma ogromne znaczenie.</p>',
  },
  {
    id: 2.7,
    img: "/img/views/checklist-for-ecommerce/2.7.png",
    name: "Minikoszyk w nagłówku",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Minikoszyk w nagłówku</subheader><p>Koszyk w sklepie dzieli się na koszyk główny, który znajduje się na dedykowanej podstronie i mini koszyk wyświetlający podsumowanie dodanych do koszyka produktów:</p><ul><li>liczbę dodanych produktów, </li><li>łączną kwotę zakupu,</li><li>koszt wysyłki.</li></ul><img src="images/2.7.png" width="500" alt="Minikoszyk w nagłówku"><p>Dzięki koszykowi w wersji mini umieszczonym w nagłówku strony użytkownik upewnia się, czy dodał do koszyka właściwe produkty, np. w odpowiednim kolorze i rozmiarze. Sprawdza, czy produkt został poprawnie dodany lub nie przekroczył budżetu przeznaczonego na zakupy.</p><p>Mini koszyk powinien pojawiać się po najechaniu kursorem lub kliknięciu jego ikonę. Po rozwinięciu powinna być możliwość szybkiego usuwania produktów i przejścia do koszyka w wersji głównej.</p><p>Dobrą praktyką jest wyświetlenie liczby produktów i łącznego kosztu na ikonie w nagłówku, bez konieczności dodatkowej interakcji.</p>',
  },
  {
    id: 2.8,
    img: "/img/views/checklist-for-ecommerce/2.8.png",
    name: "Linki do logowania i rejestracji",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Linki do logowania i rejestracji</subheader><p>Rejestracja i logowanie się do sklepu musi być łatwe i intuicyjne. Przyciski rejestracji i logowania muszą być umieszczone w widocznym miejscu.</p><p>Dobrą praktyką jest stworzenie mini formularza do logowania, który będzie rozwijał się po najechaniu na link logowania lub kliknięciu go, bez potrzeby przejścia na dedykowaną podstronę.</p><img src="images/2.8.png" width="500" alt="Linki do logowania i rejestracji"><p>Zadbaj o minimalizm – w formularzu rejestracji umieść tylko najważniejsze pola. Oprócz prostoty obsługi niesie to za sobą jeszcze dodatkowy atut: w dobie RODO warto zadbać o ograniczenie zbieranych o użytkownikach informacji. Rejestracja konta użytkownika to dla sklepu dodatkowe korzyści. Wykorzystując mailing, warto informować klienta o aktualnych promocjach czy podjąć próbę upsellingu, np. sprzedać po tygodniu szkło hartowane do zakupionego wcześniej telefonu. </p><p>Warto użytkowników dodatkowo zachęcić do rejestracji, np. generując kod rabatowy na pierwsze zakupy.</p><p>Warto umożliwić użytkownikowi zakup jako gość, bez potrzeby rejestracji. Może być to dodatkowy atut dla użytkowników, którzy nie chcą zakładać konta, obawiając się zapisania do kolejnej listy mailingowej.</p><p></p>',
  },
  {
    id: 2.9,
    img: "/img/views/checklist-for-ecommerce/2.9.png",
    name: "Okruszki (breadcrumbs) wszędzie oprócz strony głównej",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Okruszki (breadcrumbs) wszędzie oprócz strony głównej</subheader><p>Breadcrumbs, czyli nawigacja okruszkowa stanowi nieodłączny element każdej strony internetowej. Ma ona wskazać użytkownikowi aktualną pozycję w serwisie.</p><p>Nawigację okruszkową można porównać do struktury folderów na dysku twardym. Na stronach internetowych przybiera ona następującą formę:</p><p>Strona główna &gt; Kategoria &gt; Podkategoria &gt; Produkt</p><p>Okruszki muszą być umieszczone w widocznym miejscu w górnej części strony internetowej. Nie zabierają wiele przestrzeni, a pełnią przydatną funkcję, zarówno dla użytkownika, jak i robotów wyszukiwarek.</p><img src="images/2.9.png" width="500" alt="Okruszki (breadcrumbs) wszędzie oprócz strony głównej"><p>Użytkownicy mogą przejść do nadrzędnych kategorii bez konieczności szukania odnośnika na stronie. Breadcrumbs zwykle umiejscawiamy tak, aby rzucały się w oczy. Dzięki nawigacji okruszkowej użytkownicy spędzają więcej czasu na stronie, spada współczynnik odrzuceń, a długość sesji znacznie się wydłuża. Często przekłada się to na wzrost konwersji lub sprzedaży.</p><p>Stosowanie „okruszków” jest też ważne dla SEO – nawigacja okruszkowa odzwierciedla strukturę strony, dzięki czemu roboty wyszukiwarek mogą łatwiej ją zrozumieć. Poprawia się również linkowanie wewnętrzne, a także przyśpiesza się indeksacja poszczególnych treści.</p>',
  },
  {
    id: 3,
    img: "/img/views/checklist-for-ecommerce/3.png",
    name: "Kategoria",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Kategoria</subheader><p>Podstrony kategorii produktowych w sklepie internetowym stanowią główne źródło ruchu użytkowników. Od nich zależy, czy potencjalny klient będzie chciał przeglądać produkty, czy zostanie na sklepie dłużej i czy podejmie decyzję o zakupie.</p><p>Podstrony muszą być możliwie przejrzyste – użytkownik nie może być przytłoczony ilością informacji lub treści, a obsługa musi być łatwa zarówno na komputerach, jak i urządzeniach mobilnych.</p><img src="images/3.0.png" width="500" alt="Kategoria"><p>Podstrona kategorii musi być jak najbardziej przyjazna w obsłudze. Wtedy użytkownik odczuje przyjemność z przeglądania dużej liczby produktów i spędzi w sklepie więcej czasu. W kategoriach muszą znajdować się elementy, które ułatwiają poszukiwania niezdecydowanemu użytkownikowi i skracają czas potrzebny na wyszukiwanie, np. opcje sortowania produktów i filtracji wg konkretnych cech.</p><p>Należy też zadbać o detale, np. poprawne działanie linków prowadzących do produktów. Nie może być tam ukrytych interakcji takich jak automatyczne dodanie produktu do koszyka po kliknięciu miniatury. Takie niespodzianki powodują u użytkowników frustrację i w konsekwencji prowadzą do opuszczenia sklepu.</p>',
  },
  {
    id: 3.1,
    name: "Boczne menu kategorii",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Boczne menu kategorii</subheader><p>W przypadku sklepów z dużą liczbą podkategorii boczne menu wyświetlane w widoku kategorii odgrywa szczególnie ważną rolę w ułatwieniu nawigacji po stronie internetowej. </p><p>Poprawnie działające menu w widoku kategorii powinno prezentować listę podkategorii w obrębie aktywnego stosu tematycznego, w którym obecnie znajduje się użytkownik. Wtedy stanowi ono spore ułatwienie przy poruszaniu się w obrębie podkategorii. Wyświetlanie linków tylko z bieżącego silosu tematycznego sprawdza się idealnie w przypadku dużych zagłębień kategorii (3 poziomy i więcej), gdzie poziom 2 jest linkowany jeszcze z menu, ale 3 już z menu bocznego.</p><ul><li><strong>Komputery </strong>(menu główne) <ul><li><strong>Laptopy </strong>(menu główne)  <ul><li><strong>Dell </strong>(menu boczne)</li><li><strong>Lenovo </strong>(menu boczne)</li></ul></li></ul></li></ul><p>Z perspektywy SEO taki sposób prezentowania linków jest również bardzo dobrym rozwiązaniem dla poprawy link juice, czyli optymalizacji linkowania wewnętrznego dla jak najlepszego wykorzystania wewnętrznej mocy linków.</p><p></p>',
  },
  {
    id: 3.2,
    img: "/img/views/checklist-for-ecommerce/3.2.png",
    name: "Nawigacja fasetowa",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Nawigacja fasetowa</subheader><p>Nawigację fasetową potocznie nazywa się filtrami. To kolejna funkcjonalność, która służy do ułatwienia interakcji w sklepie. Głównym zadaniem filtrów jest ograniczenie liczby wyświetlanych produktów na podstawie ich cech. Dzięki temu nie ma potrzeby nawigacji po kolejnych kategoriach.</p><p>Tworząc listę filtrów, trzeba skupić się na najważniejszych cechach produktów. Inny zestaw filtrów będzie w sklepie odzieżowym, a inny w meblowym. Dla przykładu w kategorii z sukienkami typowym zestawem kryteriów do filtrowania będzie:</p><ul><li>kolor,</li><li>rozmiar,</li><li>marka,</li><li>cena.</li></ul><p>Mogą zostać umieszczone w pasku bocznym (pod bocznym menu) lub tuż nad produktami.</p><p></p><img src="images/3.2.png" width="500" alt="Nawigacja fasetowa"><p></p><p>Dobrą praktyką jest pokazanie liczby produktów spełniających konkretne kryterium.</p>',
  },
  {
    id: 3.3,
    img: "/img/views/checklist-for-ecommerce/3.3.png",
    name: "Sortowanie produktów",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Sortowanie produktów</subheader><p>Sortowanie to jedno z narzędzi, które ma ułatwić poszukiwanie produktów w sklepie i ułatwić podjęcie decyzji o zakupie. Brak możliwości sortowania może zniechęcić użytkownika do dalszych interakcji na stronie sklepu.</p><img src="images/3.3.png" width="500" alt="Sortowanie produktów"><p>W każdym sklepie powinna być możliwość sortowania produktów w widoku kategorii. Podstawowymi opcjami sortowania są:</p><ul><li>cena,</li><li>nazwa,</li><li>popularność.</li></ul><p>Funkcja sortowania powinna dawać możliwość wyboru sposobu wizualizacji produktów zarówno w porządku rosnącym, jak i malejącym.</p><p>W zależności od specyfiki branży można zastosować dodatkowe opcje sortowania po cechach produktów, np.:</p><ul><li>używane samochody <em>według przebiegu</em>,</li><li>żarówki <em>po mocy</em>,</li><li>akumulatory <em>po pojemności.</em></li></ul><p></p>',
  },
  {
    id: 3.4,
    name: "Widoczne ceny produktów",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Widoczne ceny produktów</subheader><p>Projekt graficzny kategorii musi skupiać się na ekspozycji produktów. Pozostałe elementy takie jak np. najnowsze promocje, nie mogą rozpraszać użytkownika i nie powinny celowo odwracać jego uwagi od listy produktowej. Użytkownik przeglądający produkty szuka jednak nie tylko czegoś atrakcyjnego wizualnie – bardzo często kryterium wyboru jest cena. </p><p>Właśnie dlatego ceny stanowią ważny składnik widoku kategorii produktowych. Należy zadbać, aby były one zawsze widoczne. Niedozwolone są takie praktyki jak np. wyświetlanie się ceny po najechaniu kursorem czy prezentowanie ceny dopiero na podstronie produktowej.</p><p>W zależności od branży i grupy docelowej można ceny prezentować jako wartości brutto lub netto: brutto dla użytkownika indywidualnego (B2C), a netto, gdy klientami są głównie firmy (B2B). Zaprezentowanie cen netto indywidualnemu klientowi może wprowadzić zamieszanie po przejściu do koszyka.</p><p></p>',
  },
  {
    id: 3.5,
    img: "/img/views/checklist-for-ecommerce/3.5.png",
    name: "Klikalna nazwa produktu i miniatura",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Klikalna nazwa produktu i miniatura</subheader><p>Projektując sklep internetowy, na każdym kroku trzeba przykładać jak największą wagę do prostoty obsługi. Od tego zależy, ile czasu spędzi w sklepie potencjalny klient.</p><p><strong>Użytkownikami w internecie, tak samo jak w innych dziedzinach życia, kierują przyzwyczajenia. Przejście do produktu powinno koniecznie następować przez kliknięcie zarówno w zdjęcie produktowe, jak i nazwę produktową.</strong></p><img src="images/3.5.png" width="500" alt="Klikalna nazwa produktu i miniatura"><p>Link z nazwy produktu ma szczególne znaczenie w SEO, ponieważ zawartość anchor tekstu hiperłącza ma bezpośredni wpływ na ranking linkowanej podstrony w wyszukiwarce Google.</p><p></p>',
  },
  {
    id: 3.6,
    name: "Widoczne oceny produktowe (gwiazdki)",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Widoczne oceny produktowe (gwiazdki)</subheader><p>Obecność gwiazdek w widoku kategorii może zwiększyć zainteresowanie produktami ocenionymi przez społeczność. Ten element jest szczególnie istotny dla użytkowników, którzy podczas zakupów są często niezdecydowani albo lubią podejmować decyzję o zakupie impulsywnie, zamiast kierować się mechanizmem racjonalnym.</p><p>Gwiazdki mogą zwiększyć klikalność konkretnych produktów i wyróżnić je wewnątrz obszernej kategorii.</p><p>Jeśli sklep daje możliwość wystawiania ocen produktowych, należy umieścić ranking gwiazdkowy w widoku kategorii. Gwiazdki powinny pojawiać się tylko przy tych produktach, które zostały wcześniej ocenione. Nie mogą skupiać zbyt dużej uwagi ani zajmować zbyt dużo miejsca.</p><p></p>',
  },
  {
    id: 3.7,
    name: "Treść rozdzielona na 2 pola",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Treść rozdzielona na 2 pola</subheader><p>Opis kategorii musi być na tyle długi, aby strona została doceniona przez wyszukiwarkę internetową, ale jego ilość nie może przytłaczać użytkowników.</p><p>Rekomendujemy, aby tekst był podzielony na dwa pola: pierwsze krótsze, wyświetlające się w obszarze ATF, czyli na pierwszym ekranie zaraz po załadowaniu się strony na ekranie w rozdzielczości FullHD bez konieczności przewijania. W pierwszym polu powinno pojawiać się ok. 400 znaków ze spacjami. Drugie pole powinno być umieszczone pod produktami, tuż nad stopką.</p><img src="images/3.7.png" alt="Treść rozdzielona na 2 pola"><p>W przypadku urządzeń mobilnych dobrą praktyką jest zawinięcie treści pod przyciskiem „pokaż więcej” lub przeniesienie całej treści na dół pod produktami. Na urządzeniach mobilnych nadmiar treści bardzo utrudnia interakcję i może zniechęcać do dalszego przeglądania produktów.</p>',
  },
  {
    id: 4,
    img: "/img/views/checklist-for-ecommerce/4.png",
    name: "Podstrona produktowa – Obszar ATF",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Podstrona produktowa – Obszar ATF</subheader><p>Obszar ATF (Above The Fold) to część strony widoczna od razu po załadowaniu jej w przeglądarce bez konieczności przewijania, dlatego musi wywrzeć dobre pierwsze wrażenie. Obecność konkretnych elementów w tym obszarze nie tylko ma wpływ na postrzeganie sklepu internetowego przez użytkownika, ale jest również czynnikiem rankingowym, dlatego ma wysokie znaczenie dla SEO. Należy zadbać o dopasowanie podstrony produktowej do ogólnie przyjętych standardów.</p><p>W tej sekcji w zależności od potrzeb sprawdzimy, czy w obszarze ATF testowanego sklepu internetowego znajdują się wszystkie elementy typowe dla podstron produktowych w sklepach online:</p><ul><li>galeria zdjęć z możliwością powiększenia obrazów,</li><li>widoczna nazwa produktu w nagłówku H1,</li><li>widoczna nazwa producenta z linkiem do podstrony,</li><li>ocena produktowa,</li><li>cena z kosztem dostawy i przewidywanym czasem doręczenia,</li><li>możliwość wyboru ilości,</li><li>łatwość dodania do koszyka,</li><li>wybór wariantów produktowych.</li></ul><img src="images/4.0.png" width="500" alt="Podstrona produktowa – Obszar ATF">',
  },
  {
    id: 4.1,
    img: "/img/views/checklist-for-ecommerce/4.1.png",
    name: "Galeria zdjęć z powiększaniem",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Galeria zdjęć z powiększaniem</subheader><p>Graficzna prezentacja produktu jest kluczowym elementem skutecznej sprzedaży w internecie. Atrakcyjna graficznie galeria dostępna na podstronie produktu to jedyny sposób na dostarczenie klientowi emocji podobnych do tych doświadczanych przy oglądaniu produktu w sklepie stacjonarnym.</p><p>Dobrym posunięciem będzie zamieszczenie w galerii oprócz samych zdjęć produktowych filmu czy nawet interaktywnej animacji obrotowej w formie sekwencji zdjęć.</p><p>Rekomendujemy, aby galeria znajdowała się po lewej stronie obszaru ATF i umożliwiała powiększanie zdjęć produktowych w formie interaktywnego okienka typu lightbox.</p><img src="images/4.1.png" width="500" alt="Galeria zdjęć z powiększaniem"><p>Co ciekawe, dzięki eksperymentalnej funkcji w wyszukiwarce Google uruchomionej na telefonie wspierającym standard AR Core, można prezentować produkty w czasie rzeczywistym, umieszczając je np. na podłodze w salonie. Aby to było możliwe, konieczne jest stworzenie specjalnego modelu 3D i wskazanie go w specjalnym typie danych uporządkowanych „3DModel”, zdefiniowanym w standardzie schema.org.</p>',
  },
  {
    id: 4.2,
    img: "/img/views/checklist-for-ecommerce/4.2.png",
    name: "Nazwa – Producent – Średnia ocena",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Nazwa – Producent – Średnia ocena</subheader><p>Na podstronie produktowej musi znajdować się jasno sprecyzowana nazwa produktowa umieszczona w nagłówku H1, w obrębie obszaru ATF. Nazwa musi być pierwsza od góry. Wynika to nie tylko z ogólnoprzyjętych reguł, ale również z wymogów optymalizacji SEO, która zaleca umieszczenie nagłówka H1 jako pierwszego nagłówka w kodzie źródłowym.</p><p>Zalecamy nazewnictwo produktów zgodne ze schematem: Drukarka atramentowa HP 2620</p><ul><li>nazwy silosu tematycznego produktu (Drukarka)</li><li>unikalna cecha produktu (Atramentowa)</li><li>model (HP 2620)</li></ul><p>Tuż pod nazwą produktu powinny znajdować się:</p><ul><li>ocena w formie gwiazdek,</li><li>link do dedykowanej podstrony producenta.</li></ul><p>Jeśli sklep nie ma żadnej ze wspomnianych funkcji, warto rozważyć rozbudowę funkcjonalności. Oceny mogą motywować konsumenta do dokonania zakupu, jeśli produkt otrzymuje od społeczności wysokie noty, a dedykowane podstrony producentów pozwolą osiągnąć większą widoczność sklepu w wynikach organicznych. Link do producenta przy każdym produkcie doskonale wzmacnia te podstrony i jest czynnikiem, który pomaga w budowaniu ich widoczności.</p><img src="images/4.2.png" width="500" alt="Nazwa – Producent – Średnia ocena"><p></p>',
  },
  {
    id: 4.3,
    name: "Cena – Koszt dostawy – Dostępność",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Cena – Koszt dostawy – Dostępność</subheader><p>Tuż pod nazwą produktu, ocenami i linkiem producenta powinna znajdować się informacja o cenie produktu. Cena musi być wyrażona jako kwota brutto lub netto w zależności od grupy docelowej sklepu (B2B / B2C). Dla konsumenta jest ważna pełna kwota, a dla przedsiębiorcy wartość bez podatku VAT.</p><p>W sklepie online ważna jest transparentność. Ukryte koszty, które użytkownik poznaje dopiero na etapie finalizacji zamówienia, mogą przesądzić o porzuceniu koszyka i złożeniu zamówienia w innym sklepie. Z tego powodu niedaleko ceny powinna znaleźć się informacja o najniższym koszcie dostawy, nie powinna jednak przyciągać zbyt wielkiej uwagi. Dobrym posunięciem jest utworzenie pełnego cennika dostawy wyświetlającego się w formie podpowiedzi po kliknięciu obszaru kosztów dostawy.</p><p>Rekomendujemy umieszczenie informacji o dostępności produktu w pobliżu kosztów dostawy, niezależnie od tego, czy dostawa zajmie 24 godziny, czy 10 dni roboczych. Klient musi być świadomy czasu realizacji zamówienia. Z jednej strony szybki czas realizacji zmotywuje do zakupów, z drugiej strony informacja o długim czasie realizacji pozwoli uniknąć ewentualnych nieprzyjemności i negatywnej opinii.</p><p>Wszystkie wspomniane elementy powinny występować w obszarze ATF, bez konieczności przewijania strony. Informacja o dostępności może ewentualnie znaleźć się niżej. Ważne, żeby konsument mógł dotrzeć do niej bez komplikacji.</p><p></p>',
  },
  {
    id: 4.4,
    img: "/img/views/checklist-for-ecommerce/4.4.png",
    name: "Dodawanie produktu do koszyka",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Dodawanie produktu do koszyka</subheader><p>Proces zakupu musi być maksymalnie uproszczony, żeby nie powodować u konsumenta niepotrzebnych wątpliwości. W tym celu na podstronie produktowej trzeba umieścić pola, które pozwalają na konfigurację produktu i jego dodanie do koszyka. Typ produktu definiuje, jakie dokładnie pola powinny znajdować się przy wyborze cech produktu, np.:</p><ul><li>kawa mielona: wielkość opakowania</li><li>sukienka: kolor i rozmiar</li><li>rolety na okna: kolor, szerokość, strona montażu</li></ul><p>Przyciski muszą występować w logicznej kolejności interakcji, zależnej od branży. Na przykład w sklepie odzieżowym najpierw wybiera się kolor sukienki, następnie rozmiar i ilość, dopiero na końcu produkt dodaje się do koszyka.</p><img src="images/4.4.png" width="500" alt="Dodawanie produktu do koszyka"><p>Wszystkie wspomniane elementy powinny znajdować się po prawej stronie obszaru ATF na podstronie produktu. To standardowy schemat konstrukcji szablonów sklepów internetowych i większość użytkowników tam właśnie będzie tych elementów szukać.</p>',
  },
  {
    id: 4.5,
    img: "/img/views/checklist-for-ecommerce/4.5.png",
    name: "Warianty, zachowanie się sklepu",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Warianty, zachowanie się sklepu</subheader><p>W sklepach, w których produkty są oferowane w wielu wariantach, np. kolorystycznych, sposób wyboru wariantu nie może budzić u użytkownika żadnych zastrzeżeń, które mogłyby podważać poprawność działania skryptu sklepu, lub utrudnić podjęcie ostatecznej decyzji o zakupie.</p><p>Gdy oferowany produkt jest dostępny w różnych kolorach, to wybór konkretnego koloru przed dodaniem do koszyka powinien automatycznie przełączać galerię zdjęć na ten właśnie kolor. Dzięki takiemu zachowaniu się podstrony produktowej użytkownik nie tylko jest pewien, że otrzyma właściwy produkt, ale też rozwiane zostaną jego wątpliwości co do różnic w kolorze, np. pomiędzy: </p><ul><li>seledynowym, </li><li>oliwkowym, </li><li>zielonym.</li></ul><p>Podobnie powinny działać inne cechy, które da się zobrazować, np.:</p><ul><li>wybór drzwi prawych lub lewych,</li><li>zakup akumulatora z plusem lewym lub prawym</li></ul><p>W powyższych przypadkach galeria powinna prezentować odbicie lustrzane.</p><p>Ważne jest odpowiednie zabezpieczenie mechanizmu zamawiania produktów przed błędami ludzkimi. Jeżeli użytkownik omyłkowo nie wybrał wariantu, to sklep nie powinien pozwolić na dodanie produktu do koszyka. W takiej sytuacji musi zostać wyświetlony stosowny komunikat, a pole wyboru wariantu i rozmiaru powinno być podświetlone kolorem.</p><p></p>',
  },
  {
    id: 5,
    img: "/img/views/checklist-for-ecommerce/5.png",
    name: "Podstrona produktowa Obszar BTF",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Podstrona produktowa Obszar BTF</subheader><p>Obszar BTF (Below The Fold) to część strony widoczna po przewinięciu ekranu, poniżej obszaru ATF. Obszar ATF musi zrobić dobre pierwsze wrażenie, a BTF musi przekonać klienta do zakupu konkretnego produktu. Część elementów znajdujących się w tym miejscu ma kluczowy wpływ na widoczność sklepu w wynikach wyszukiwania.</p><p>W zależności od potrzeb w tym dziale zweryfikujemy:</p><ul><li>opis produktu,</li><li>dane techniczne,</li><li>opinie i recenzje klientów,</li><li>dodatkowe informacje na temat zwrotów i gwarancji,</li><li>unikalną propozycję sprzedażową, tzw. USP,</li><li>produkty powiązane.</li></ul><img src="images/5.0.png" width="500" alt="Podstrona produktowa Obszar BTF">',
  },
  {
    id: 5.1,
    name: "Opis produktu",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Opis produktu</subheader><p>W dobie panujących czynników rankingowych w Google, gdzie głównym wyznacznikiem jest unikalność treści, polecamy ograniczenie importowania opisów produktowych z hurtowni lub, jeśli to konieczne, zalecamy traktować zdublowane opisy jako tymczasowe. Duplikowanie treści z innych sklepów wpływa negatywnie na pozycję sklepu w rankingu.</p><p>Naszą rekomendacją jest utworzenie unikalnej treści o długości  min. 400 znaków ze spacjami dla każdego produktu. Na początkowym etapie wyjątkiem mogą być inne wersje kolorystyczne jednego modelu produktu. W takim przypadku treści mogą się dublować, jednak warto po pewnym czasie zadbać o ich unikalność. Najwięksi giganci starają się tworzyć opisy unikalne nawet dla różnych wersji kolorystycznych tego samego produktu, jeśli występują one na osobnych podstronach np. iPhone biały i szary.</p><p>W przypadku dłuższych opisów należy zadbać, aby nie były to tzw. ściany tekstu: treść powinna być urozmaicona np. grafikami produktowymi z packshotów, które nie występują w galerii, listami punktowanymi i śródtytułami w formie nagłówków H2 i H3.</p><p>Więcej informacji: <a href="https://www.grupa-tense.pl/blog/jak-stworzyc-opisy-produktow-ktore-nie-odstrasza-klientow-sklepu-internetowego/">https://www.grupa-tense.pl/blog/jak-stworzyc-opisy-produktow-ktore-nie-odstrasza-klientow-sklepu-internetowego/</a></p>',
  },
  {
    id: 5.2,
    name: "Specyfikacja techniczna",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Specyfikacja techniczna</subheader><p>Niezależnie od branży użytkownicy uwielbiają taki sposób prezentacji danych, który jest łatwy do analizy i porównań. Idealnym przykładem są produktowe specyfikacje techniczne. Pod każdym opisem produktu powinna znaleźć się lista punktowana lub tabela, która w przejrzysty sposób podsumowuje wszystkie najważniejsze cechy produktowe.</p><p>Jest spora część klientów, która nie czyta długich tekstów, dlatego zawarcie pełnej specyfikacji tylko w tekście, w formie opisowej spowoduje, że nie zostanie ona dostrzeżona.</p><p>Najlepiej, gdy specyfikacja techniczna zostanie dodana do produktów w formie atrybutów w panelu administracyjnym, które następnie mogą zostać użyte w procesie filtrowania produktów. Zalecamy ustawienie listy punktowanej w edytorze wizualnym jako ostateczność, jeśli nie da się tego zrobić w formie atrybutów produktowych.</p><p>Warto zwrócić uwagę na odpowiedni zapis jednostek, żeby przypadkowo nie wprowadzić użytkowników w błąd, np.:</p><ul><li>MB - megabajt,</li><li>Mb - megabit,</li><li>KM - koń mechaniczny,</li><li>km - kilometr.</li></ul><p>Specyfikacja nie powinna ograniczać się jedynie do jednostek fizycznych. Zakres definiuje branża i intencja użytkownika, np. dla sukienki warto zaprezentować taki zestaw atrybutów:.</p><ul><li>materiał / skład, </li><li>sposób prania, </li><li>kraj produkcji.</li></ul>',
  },
  {
    id: 5.3,
    img: "/img/views/checklist-for-ecommerce/5.3.png",
    name: "Recenzje",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Recenzje</subheader><p>Recenzje stanowią dodatkowy element dodany do sklepu. Większość klientów poszukuje opinii na temat konkretnego produktu, by przekonać się do jego zakupu, poznać jego wady i zalety przedstawione przez społeczność, która rzeczywiście taki produkt już posiada.</p><p>Dla właściciela sklepu opinie mogą być cenną informacją na temat jakości, bezawaryjności i pierwszego wrażenia, jakie produkt wywołał u konsumenta. Widząc negatywne opinie przy produkcie, można podjąć decyzję o wycofaniu go z oferty lub zrezygnować ze sprzedaży produktów konkretnej marki podczas kolejnego planowania zatowarowania sklepu.</p><p>Rekomendujemy uruchomienie w sklepie możliwości opiniowania produktów z opcją pozostawienia oceny gwiazdkowej, najlepiej bez potrzeby rejestracji, ale z koniecznością akceptacji przez administratora. Obecność gwiazdek, pod warunkiem umieszczenia ich w danych uporządkowanych typu Produkt wg. specyfikacji schema.org, może poprawić CTR (stosunek kliknięć do wyświetleń) w wynikach organicznych, dzięki dodatkowemu wyróżnieniu przez wygenerowanie fragmentu rozszerzonego:</p><img src="images/5.3.png" width="500" alt="Prezentacja ocen w SERP\'ach"><p>Recenzje stanowią dużą wartość dodaną dla SEO. Pomimo że jest to treść UGC (User Generated Content), to ich zawartość jest traktowana przed Google tak, jakby była rozszerzeniem opisu produktowego. Może pomagać wyświetlać się na nieoczywiste frazy Long Tail, jeśli użytkownik użył konkretnych sformułowań poszukiwanych przez społeczność. Ponadto treści UGC mogą być dodatkowym czynnikiem, który świadczy o popularności strony w internecie.</p><p>Samo włączenie recenzji wcale nie oznacza, że konsumenci będą z nich korzystać. Dobrą praktyką jest mailing zachęcający do napisania opinii po określonym czasie od finalizacji zakupów przez klienta. Niektóre wielkie sklepy korzystające z autorskich systemów do sprzedaży posiadają w recenzjach mini forum dyskusyjne, które dla konsumenta przypomina FAQ (często zadawane pytania), ale jest tworzone przez społeczność. Przy produkcie można zadać pytanie, a specjalista lub użytkownik posiadający sprzęt udziela odpowiedzi.</p><p></p>',
  },
  {
    id: 5.4,
    name: "USP Sklepu",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">USP Sklepu</subheader><p>USP (Unique Selling Proposition) to sekcja z unikalnymi cechami oferty. Ten element jest bardzo ważny przy konfrontacji z konkurencją. Trzeba wskazać swoją przewagę, pokazać czym wyróżnia się sklep na tle konkurencji i dlaczego klient powinien kupić akurat tutaj.</p><p><strong>Rekomendujemy, aby taka sekcja znajdowała się w widocznym miejscu w obszarze BTF, ale nie była zbyt absorbująca. W pierwszej chwili konsument musi skupić się na produkcie, USP powinny stanowić wisienkę na torcie, która wpłynie na podjęcie ostatecznej decyzji.</strong></p><p><strong>Przykłady USP:</strong></p><ul><li><strong>darmowa wysyłka,</strong></li><li><strong>możliwość zwrotu w ciągu 30 dni,</strong></li><li><strong>darmowy zwrot,</strong></li><li><strong>wysyłka w 24h,</strong></li><li><strong>rabat na pierwsze zakupy,</strong></li><li><strong>dodatkowy rok gwarancji,</strong></li><li><strong>kosmetyki w 100% naturalne.</strong></li></ul><p>W gąszczu sklepów internetowych i branż o wysokiej konkurencyjności nie jest łatwo się wyróżnić, trzeba więc przynajmniej oferować to samo co konkurencja. Innym sposobem na USP jest również przedstawienie wartości dodanej takiej jak: </p><ul><li>dodanie 5 cukierków z logotypem do paczki,</li><li>stworzenie opakowania z zabawną infografiką,</li><li>dodanie śmiesznej wizytówki „Twoją paczkę zapakowała Ania! Buziaczki :*”,</li><li>kod rabatowy na kolejne zakupy.</li></ul><p>Takie drobiazgi pozwolą zostać zapamiętanym i mogą stanowić element strategii budowy świadomości marki. Muszą być oczywiście dopasowane do sytuacji i branży, np. prestiżowej firmie krawieckiej z garniturami nie przystoi tworzenie śmiesznych opakowań.</p><p></p>',
  },
  {
    id: 5.5,
    name: "Produkty powiązane",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Produkty powiązane</subheader><p>Podczas prezentowania produktu klientowi warto skorzystać z możliwości cross sellingu, który może okazać się dodatkowym dochodem dla sklepu. Cross selling polega na zaprezentowaniu konsumentowi produktów komplementarnych, które warto kupić w zestawie razem z produktem podstawowym. Warto w tej sekcji utworzyć dodatkowe rabaty dla zakupów w zestawach. Cross selling to inaczej sprzedaż krzyżowa, która odbywa się w ramach jednej transakcji i dostawy. </p><p>Przykłady:</p><ul><li>laptop + torba + myszka + podstawka chłodząca,</li><li>klucz dynamometryczny + nasadki torx i sześciokątne,</li><li>sofa + narzuta na sofę + poduszki dekoracyjne,</li><li>burger + frytki + cola.</li></ul><p>W tym miejscu warto też zaproponować usługi komplementarne do przeglądanego produktu, np.:</p><ul><li>laptop + usługa instalacji programu antywirusowego,</li><li>alkomat + usługa kalibracji,</li><li>program do księgowości + godzinne szkolenie online.</li></ul><p>Rekomendujemy dodanie takiej sekcji u dołu podstrony produktowej z promowanymi produktami lub usługami powiązanymi. Takie produkty można odpowiednio dopasowywać w zależności od branży i intencji, jaką zamierzamy narzucić konsumentowi, aby zmaksymalizować przychód.</p><p>To popularna technika sprzedaży produktów, które posiadają najwyższe marże i przynoszą największy dochód, takich jak np. dodatkowe gwarancje i ubezpieczenia w sklepach z elektroniką.</p>',
  },
  {
    id: 6,
    name: "Wpisy blogowe",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Wpisy blogowe</subheader><p>Rekomendujemy aktywne prowadzenie bloga firmowego, ponieważ daje całą masę korzyści, zarówno wizerunkowych, jak i typowych dla widoczności organicznej. Blog buduje zaufanie i kreuje pozycję lidera. Dobrze opracowane tematy stawiają sklep w dobrym świetle. Ponadto wpisy mogą generować dodatkowy ruch – wtedy stanowią kolejny kanał konwersji i sprzedaży produktów dzięki umieszczeniu w nim elementów nawiązujących do działania. Przykłady to:</p><ul><li>wyróżnione produkty tematyczne do wpisu,</li><li>promocje, kody rabatowe,</li><li>odnośniki do kategorii.</li></ul><p>Z perspektywy SEO podstawowym zadaniem bloga jest poprawa Topical Authority dla całej domeny. Dzieje się to dzięki publikacji treści powiązanych tematycznie z asortymentem w sklepie. Rozbudowa bloga o tematyczne wpisy pośrednio przyczynia się do wzmocnienia podstron ofertowych, właśnie dzięki wzmocnieniu całej domeny. W toku optymalizacji strony wpisy blogowe mogą poprawiać linkowanie wewnętrzne dzięki umieszczaniu w nich produktów wyróżnionych i linków do kategorii, a dodatkowo, gdy treści są przydatne dla użytkowników, mogą w dłuższej perspektywie dać linki przychodzące umieszczone przez społeczność np. na forach dyskusyjnych.</p><p>Przykładowe tematy, jakie można poruszać podczas tworzenia wpisów blogowych:</p><ul><li><strong>odpowiedzi na często zadawane pytania</strong>, np. Jak zamontować poprawnie roletę bezinwazyjną?</li><li><strong>wydarzenia w firmie</strong>, np. Relacja z targów zdrowej żywności,</li><li><strong>testy i porównania produktów</strong>, np. Który smartfon kupić w cenie 3000 zł?</li><li><strong>pozytywna odpowiedź na zły PR w internecie</strong>, np. Kłopoty z przegrzewaniem się Laptopa XYZ? Pobierz najnowsze sterowniki,</li><li><strong>aktualności branżowe.</strong></li></ul><p>Więcej informacji:</p><p><a href="https://www.grupa-tense.pl/blog/10-podstawowych-zasad-pisania-firmowego-bloga/">https://www.grupa-tense.pl/blog/10-podstawowych-zasad-pisania-firmowego-bloga/</a> </p><p><a href="https://www.grupa-tense.pl/blog/jak-pozycjonowac-blog-seo-dla-bloga-krok-po-kroku/">https://www.grupa-tense.pl/blog/jak-pozycjonowac-blog-seo-dla-bloga-krok-po-kroku/</a> </p><p></p>',
  },
  {
    id: 6.1,
    img: "/img/views/checklist-for-ecommerce/6.1.png",
    name: "Formatowanie wpisów",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Formatowanie wpisów</subheader><p>Redagując wpisy blogowe, należy dbać o odpowiednią hierarchię treści. Tytuł główny artykułu musi zostać otagowany nagłówkiem H1, a następnie śródtytuły nagłówkami niższego poziomu H2 i H3, w zależności od intencji. O to przykładowa dobrze zaplanowana hierarchia:</p><p></p><img src="images/6.1.png" width="500" alt="Formatowanie wpisów"><p></p><p>Należy dbać, aby posty blogowe były czytelne. Z tego powodu nie mogą przypominać wielkich bloków treści – trzeba pamiętać o podziale na akapity co ok. 400 do 500 znaków. Średnio co 2 akapity powinien znajdować się śródtytuł w formie nagłówka H2 lub H3, a dodatkowej czytelności dostarczą tabele i listy punktowane.</p><p>Każdy wpis powinien posiadać grafikę wyróżniającą go na podstronie z listą postów. Posłuży ona też jako obrazek wyróżniający podczas publikacji wpisu na portalach społecznościowych.</p><p>Więcej informacji:</p><p><a href="https://www.grupa-tense.pl/blog/10-podstawowych-zasad-pisania-firmowego-bloga/">https://www.grupa-tense.pl/blog/10-podstawowych-zasad-pisania-firmowego-bloga/</a> </p><p><a href="https://www.grupa-tense.pl/blog/jak-pozycjonowac-blog-seo-dla-bloga-krok-po-kroku/">https://www.grupa-tense.pl/blog/jak-pozycjonowac-blog-seo-dla-bloga-krok-po-kroku/</a> </p><p></p>',
  },
  {
    id: 6.2,
    name: "Nawiązania do działania w treści",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Nawiązania do działania w treści</subheader><p>Poprawnie zredagowane i sformatowane wpisy na blogu będą zdobywać widoczność organiczną. Im wyższa będzie ich pozycja, tym większy ruch mogą generować. </p><p>Użytkownika z bloga można przekształcić w klienta dzięki umieszczeniu we wpisach odpowiednich elementów CTA nawiązujących do działania.</p><p><strong>Rekomendujemy:</strong></p><p><strong>Umieszczać linki do produktów tematycznych (3.4 produkty) między akapitami.</strong> Zalecamy, aby były pobierane dynamicznie wraz z grafiką wyróżniającą i aktualną ceną ze wskazanej kategorii,  np. wpis na temat sukienek na pierwszą randkę i produkty z kategorii czerwone sukienki. Niestety nie każdy system sklepowy oferuje taką możliwość. Należy zapytać o nią swojego dostawcę oprogramowania lub zweryfikować dostępną dokumentację. Niektóre systemy oferują użycie tzw. Shortcode.</p><p><strong>Tworzyć kody rabatowe i akcje promocyjne. </strong>Wpisy zawierające w sobie atrakcyjne akcje rabatowe mogą stać się nośnikiem budującym markę sklepu dzięki społeczności „łowców okazji”. Dobrą praktyką będzie tworzenie okresowych kodów rabatowych na ściśle określony asortyment. Dzięki temu można nie tylko zwiększyć sprzedaż, ale również pozyskać naturalne linki lub wykorzystać takie akcje w dodatkowych publikacjach sponsorowanych.</p><p><strong>Umieścić w treści linki do kategorii  połączone z tekstowymi nawiązaniami do działania</strong> np. „sprawdź naszą ofertę <span style="text-decoration:underline;">sukienek na sylwestra</span>”. Dobrą praktyką jest tworzenie linka z frazy, która może kierować do konkretnej kategorii.</p><p></p>',
  },
  {
    id: 7,
    img: "/img/views/checklist-for-ecommerce/7.png",
    name: "Podstrona kontakt",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Podstrona kontakt</subheader><p>Posiadanie podstrony kontaktowej jest oczywistością. Niestety często zdarza się, że w gąszczu podstron sklepu zapomniano o niej lub niedopracowano jej zawartości.</p><p>W tym dziale nasza analiza skupia się m.in. na obecności:</p><ul><li>danych kontaktowych,</li><li>danych adresowych,</li><li>danych rejestracyjnych (NIP/REGON/KRS),</li><li>formularza kontaktowego,</li><li>interaktywnej mapki Google,</li><li>adresu do zwrotów.</li></ul><p></p><img src="images/7.0.png" width="500" alt="Podstrona kontakt"><p></p>',
  },
  {
    id: 7.1,
    img: "/img/views/checklist-for-ecommerce/7.1.png",
    name: "Dane kontaktowe",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Dane kontaktowe</subheader><p>Jak wynika z definicji podstrony kontaktowej, trzeba skupić się na obecności danych kontaktowych i ich odpowiedniej ekspozycji. Warto wspomnieć, że nawet ich kolejność ma znaczenie.</p><p>Rekomendujemy, aby w obszarze ATF, czyli części ekranu widocznej od razu po załadowaniu się strony internetowej zamieścić przynajmniej kluczowe dane kontaktowe, służące do pierwszego kontaktu. W przypadku gdy istnieją różne działy (np. sprzedaż, reklamacje, zwroty) lub siedziby, powinny one znajdować się poniżej danych ogólnych.</p><p></p><img src="images/7.1.png" width="500" alt="Dane kontaktowe"><p></p><p>Należy pamiętać, aby każdy zamieszczony na podstronie kontaktowej numer telefonu i adres mailowy był klikalnym hiperłączem z odpowiednim protokołem, na przykład:</p><ul><li>numery telefonów: <strong>&lt;a href="tel:48123123123"&gt;+48 123 123 123&lt;/a&gt;</strong></li><li>adresy mailowe <strong>&lt;a href="mail:kontakt@domena.pl"&gt;kontakt@domena.pl&lt;/a&gt;</strong></li></ul><p>Nie można zapominać o godzinach, w których możliwe są konsultacje. Taką informację najlepiej zamieścić tuż obok numeru telefonu.</p>',
  },
  {
    id: 7.2,
    img: "/img/views/checklist-for-ecommerce/7.2.png",
    name: "Dane rejestracyjne firmy i dane adresowe",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Dane rejestracyjne firmy i dane adresowe</subheader><p>Dane rejestracyjne firmy są najważniejszym elementem budującym wiarygodność. </p><p>Rekomendujemy, aby na podstronie kontaktowej znajdowały się:</p><ul><li>pełna nazwa firmy,</li><li>forma prawna prowadzonej działalności np. sp. z o.o.,</li><li>NIP, REGON, KRS,</li><li>adres siedziby głównej.</li></ul><p>W drodze wyjątku, gdy KRS, NIP i REGON znajdują się już w stopce, nie ma potrzeby ich powielania w zawartości samej podstrony kontaktowej.</p><p></p><img src="images/7.2.png" width="500" alt="Dane rejestracyjne firmy i dane adresowe"><p></p>',
  },
  {
    id: 7.3,
    img: "/img/views/checklist-for-ecommerce/7.3.png",
    name: "Adres do zwrotów, jeśli inny niż rejestracji działalności",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Adres do zwrotów, jeśli inny niż rejestracji działalności</subheader><p>W przypadku zakupów przez internet konsument ma prawo do zwrotu towaru w ciągu 14 dni od zakupu. W przypadku gdy sklep posiada magazyn w innym miejscu niż adres zarejestrowania działalności gospodarczej, warto zamieścić adres do zwrotów na podstronie kontaktowej, nawet pomimo utworzenia odrębnej podstrony dedykowanej zwrotom.</p><p>Użytkownicy podświadomie szukają adresu do zwrotów właśnie na podstronie kontaktowej.</p><p></p><img src="images/7.3.png" width="600" alt="Adres do zwrotów, jeśli inny niż rejestracji działalności"><p></p>',
  },
  {
    id: 7.4,
    img: "/img/views/checklist-for-ecommerce/7.4.png",
    name: "Formularz kontaktowy",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Formularz kontaktowy</subheader><p>Formularz kontaktowy powinien przyspieszać kontakt, a nie go utrudniać. Użytkownik, który nie ma czasu na zalogowanie się do swojej skrzynki mailowej, skorzysta właśnie z formularza. Dlatego musi znajdować się on w widocznym miejscu na podstronie kontaktowej, czyli tam, gdzie intuicyjnie każdy go szuka.</p><p><strong>Rekomendujemy, aby ograniczyć liczbę pól do tych najważniejszych, np.:</strong></p><ul><li><strong>Imię i Nazwisko;</strong></li><li><strong>Adres e-mail;</strong></li><li><strong>Numer telefonu;</strong></li><li><strong>Wiadomość.</strong></li></ul><p>Umieszczenie na stronie formularza kontaktowego wymusza uzyskanie zgody na przetwarzanie danych osobowych (RODO). W tym celu pod formularzem należy utworzyć pole potwierdzające udzielenie zgody na wykorzystanie danych osobowych.</p><p></p><img src="images/7.4.png" width="500" alt="Formularz kontaktowy"><p></p><p><strong>Użytkownik musi mieć pewność, że jego wiadomość została poprawnie wysłana i dostarczona przez system.</strong> Dlatego formularz musi zawierać powiadomienia zarówno o wysłaniu wiadomości, jak i o błędzie. Najlepiej, gdy na mail osoby kontaktującej się będzie przesyłana kopia wiadomości, co będzie najlepszym potwierdzeniem wysłania wiadomości.</p><p></p>',
  },
  {
    id: 7.5,
    img: "/img/views/checklist-for-ecommerce/7.5.png",
    name: "Interaktywna mapa Google",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Interaktywna mapa Google</subheader><p>Umieszczenie interaktywnej mapki na podstronie kontaktowej jest obecnie obowiązującym trendem. Ten zabieg buduje zaufanie prowadzonej w internecie działalności w oczach potencjalnych klientów.</p><p><strong>Rekomendujemy, aby mapka wskazywała na zweryfikowaną w usłudze Google Moja Firma wizytówkę:</strong></p><p></p><img src="images/7.5.png" width="500" alt="Interaktywna mapa Google"><p></p><p>Oprócz funkcji wizerunkowej umieszczenie mapy Google wskazującej na zweryfikowaną wizytówkę może być mikroczynnikiem budującym zaufanie w wyszukiwarce Google. Co w dłuższej perspektywie czasu może przełożyć się na widoczność zdobytą przez sklep w organicznych wynikach wyszukiwarki Google.</p>',
  },
  {
    id: 8,
    img: "/img/views/checklist-for-ecommerce/8.png",
    name: "Stopka",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Stopka</subheader><p>Stopka w sklepie internetowym jest miejscem użytecznymi. Muszą w niej znajdować się nie tylko te elementy, które wzbudzą zaufanie u klienta, ale również elementy wymagane przez obowiązujące prawo i stanowiące funkcję informacyjną.</p><p>W ramach przeprowadzonej analizy weryfikujemy m.in. obecności linków do:</p><ul><li>najważniejszych kategorii i podkategorii,</li><li>istotnych podstron informacyjnych,</li><li>social media.</li></ul><p>Oprócz skróconego menu sprawdzamy również występowanie elementów social proof, czyli budujących zaufanie użytkownika, m.in.:</p><ul><li>danych teleadresowych,</li><li>danych rejestracyjnych działalności gospodarczej takich jak NIP/REGON,</li><li>metod płatności.</li></ul><p>Oprócz powyższych elementów stopka może zostać wykorzystana do dodatkowej informacji dla klientów, np. o programach partnerskich lub aktualnych akcjach rabatowych. Dzięki odpowiedniemu gospodarowaniu elementami w stopce można spróbować powiększyć bazę do systemu mailingowego.</p><p></p><img src="images/8.0.png" width="500" alt="Stopka"><p></p><p></p>',
  },
  {
    id: 8.1,
    img: "/img/views/checklist-for-ecommerce/8.1.png",
    name: "Zapisanie się do newslettera",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Zapisanie się do newslettera</subheader><p>Umożliwienie zapisania się do newslettera jest dobrym sposobem na tworzenie bazy kontaktów, którą można wykorzystać podczas mailingu dotyczącego akcji promocyjnych np. w okresie świątecznym.</p><p>Rekomendujemy, jeśli istnieje taka techniczna możliwość, zachęcanie użytkowników do zapisu do newslettera np. poprzez rabat na pierwsze zakupy lub opcję darmowej wysyłki.</p><p>Pole zapisu do newslettera może znajdować się cały czas w stopce, ale dopuszczalne są też wyskakujące okienka. Nie mogą jednak za bardzo odciągać uwagi od samego asortymentu. <strong>Podczas zapisu do newslettera nie można zapomnieć o zgodzie na otrzymywanie informacji handlowej. Jej uzyskanie chroni sklep przed konsekwencjami prawnymi.</strong></p><p></p><img src="images/8.1.png" width="500" alt="Zapisanie się do newslettera"><p></p>',
  },
  {
    id: 8.2,
    img: "/img/views/checklist-for-ecommerce/8.2.png",
    name: "Linki do social media w stopce",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Linki do social media w stopce</subheader><p>Obecność w social media jest nieodzownym elementem strategii budowania marki. Założenie konta na popularnych portalach takich jak Facebook czy Instagram stanowi dziś praktycznie obowiązek. Social media mogą powodować, że nie tylko budowanie marki, ale i stworzenie relacji z klientami będzie o wiele bardziej efektywne.</p><p>Za pośrednictwem przekazu w social mediach możesz informować potencjalnych klientów o rabatach, nowej ofercie czy na bieżąco obserwować ich reakcję na publikowane treści.</p><p>Aby poinformować swoich klientów o istnieniu profili na popularnych portalach social media, należy umieścić linki do nich w widocznych miejscach, w tym w stopce:</p><p></p><img src="images/8.2.png" width="500" alt="Linki do social media w stopce"><p></p><p><strong>Pamiętaj, że oprócz oczywistego budowania zaufania, portale społecznościowe mogą także wspomóc pozycjonowanie poprzez pozyskiwanie naturalnych linków. Po pierwsze, niektóre z umieszczonych tam linków do strony internetowej same w sobie niosą pewną wartość dla SEO, jak np. link z Facebooka. Po drugie, gdy podzielisz się w social mediach ciekawym materiałem ze swojej strony, istnieje szansa na to, że użytkownicy zaczną go między sobą przekazywać i w efekcie trafi on także do zewnętrznych źródeł, takich jak np. fora o danej tematyce. </strong></p><p>Biorąc pod uwagę, że link building stanowi nieodłączny element skutecznego pozycjonowania, pozyskane w ten naturalny sposób odnośniki wpływają pozytywnie na SEO.</p><p></p>',
  },
  {
    id: 8.3,
    img: "/img/views/checklist-for-ecommerce/8.3.png",
    name: "Skrócone menu kategorii w stopce",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Skrócone menu kategorii w stopce</subheader><p>Dolne menu ma dwie zalety</p><ul><li>użytkową: ułatwia nawigację w sklepie,</li><li>SEO: poprawia moc podstron, dzięki zastosowaniu linków sitewide (znajdujących się w obrębie całego serwisu).</li></ul><p>Rekomendujemy, aby w dolnym menu umieścić kategorie najważniejsze w sklepie. Nie muszą to być kategorie główne – dla poprawy mocy podstron można w tych linkach zamieścić kategorie znajdujące się na głębszych poziomach, a na których widoczności zależy nam w szczególności.</p><p></p><img src="images/8.3.png" width="500" alt="Skrócone menu kategorii w stopce"><p></p>',
  },
  {
    id: 8.4,
    img: "/img/views/checklist-for-ecommerce/8.4.png",
    name: "Menu podstron informacyjnych w stopce",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Menu podstron informacyjnych w stopce</subheader><p>Istotnym elementem nawigacji w sklepie internetowym jest dolne menu znajdujące się w stopce, zawierające odnośniki do najważniejszych podstron informacyjnych. To miejsce jest typowe dla wszystkich sklepów internetowych, dlatego użytkownicy podświadomie poszukują tych linków właśnie w stopce.</p><p><strong>Rekomendujemy, aby w stopce znajdowały się linki do następujących podstron:</strong></p><ul><li>Regulamin;</li><li>Polityka prywatności i RODO;</li><li>Polityka zwrotów i instrukcja postępowania;</li><li>Kontakt;</li><li>Logowanie i Rejestracja.</li></ul><p></p><img src="images/8.4.png" width="500" alt="Menu podstron informacyjnych w stopce"><p></p><p>To menu można określić jako sekcję <strong>Pomoc</strong>. Obecność na stronie takich elementów jak regulamin, polityka prywatności i polityka zwrotów towarów jest wymuszona przez obowiązujące przepisy, a ich brak może wiązać się z poważnymi konsekwencjami prawnymi.</p><p>Dodatkowym elementem wyróżniającym może być zakładka FAQ z pytaniami często zadawanymi przez klientów w procesie zakupowym.</p><p></p>',
  },
  {
    id: 8.5,
    img: "/img/views/checklist-for-ecommerce/8.5.png",
    name: "Dane kontaktowe i adres w stopce",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Dane kontaktowe i adres w stopce</subheader><p>Rekomendujemy, aby w stopce znalazły się kluczowe dane kontaktowe, tj. nr telefonu i mail. Zalecamy umieszczenie w stopce adresu działalności, który buduje wiarygodność firmy w oczach tych klientów, którzy obawiają się próby oszustwa. Dodatkowym atutem jest umieszczenie numerów identyfikujących firmę, czyli NIP i REGON.</p><p>Należy pamiętać, aby każdy zamieszczony w stopce numer telefonu i adres mailowy był klikalnym hiperłączem z odpowiednim protokołem, na przykład:</p><ul><li>numery telefonów: <strong>&lt;a href="tel:48123123123"&gt;+48 123 123 123&lt;/a&gt;</strong></li><li>adresy mailowe <strong>&lt;a href="mail:<a href="mailto:kontakt@domena.pl">kontakt@domena.pl</a>"&gt;kontakt@domena.pl&lt;/a&gt;</strong></li></ul><p></p><img src="images/8.5.png" width="500" alt="Dane kontaktowe i adres w stopce"><p></p><p></p>',
  },
  {
    id: 8.6,
    img: "/img/views/checklist-for-ecommerce/8.6.png",
    name: "Metody płatności w stopce",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Metody płatności w stopce</subheader><p>Poinformowanie klientów o dostępnych metodach płatności stanowi kolejny sposób na budowanie zaufania do sklepu internetowego. Może też być elementem zachęcającym do finalizacji zakupów w sytuacji, gdy sklep obsługuje szybkie płatności mobilne i tym wyróżnia się na tle konkurencji, która nie daje takiej możliwości.</p><p><strong>Rekomendujemy, aby na dole strony (pod stopką) znajdowały się logotypy obsługiwanych form płatności, np. BLIK, VISA, MasterCard, i systemu, który realizuje transakcje, np. PayU, DotPay. Alternatywnie można formy płatności umieścić na odrębnej podstronie informacyjnej, która zostanie podlinkowana w stopce.</strong></p><p></p><img src="images/8.6.png" width="500" alt="Metody płatności w stopce"><p></p><p>Dodatkową wartość dodaną może wnosić umieszczenie rodzajów dostaw tuż obok sposobów płatności. Klienci na każdym kroku kierują się przyzwyczajeniami zakupowymi. Gdy ktoś jest nastawiony głównie na dostawy do paczkomatów, obecność tej opcji dostawy może być elementem przekonującym go do finalizacji procesu zakupowego.</p>',
  },
  {
    id: 9,
    name: "Bezpieczeństwo i zaufanie",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Bezpieczeństwo i zaufanie</subheader><p>W dziale Bezpieczeństwo i zaufanie skupimy się na elementach budujących zaufanie do sklepu u potencjalnych klientów. Mogą one mieć duży wpływ na podjęcie ostatecznej decyzji o zakupie.</p><p>Zweryfikujemy obecność takich elementów jak:</p><ul><li>certyfikat SSL,</li><li>powiadomienia o wykorzystaniu plików cookies,</li><li>polityka prywatności,</li><li>informacja o zwrotach,</li><li>regulamin.</li></ul><p>Większość spośród wymienionych elementów to formalności, których musi dopełnić każdy właściciel sklepu online.</p>',
  },
  {
    id: 9.1,
    img: "/img/views/checklist-for-ecommerce/9.1.png",
    name: "Certyfikat SSL",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Certyfikat SSL</subheader><p>Certyfikat SSL w sklepie internetowym jest nieodłącznym elementem zabezpieczeń. Oprócz funkcji zabezpieczającej jest najważniejszym elementem budującym zaufanie. Jego zadaniem jest szyfrowanie danych przesyłanych przez przeglądarkę klienta do sklepu, np. danych osobowych, oraz zabezpieczenie procesu transakcji płatniczej.</p><p><strong>Wdrażając w sklepie SSL, trzeba pamiętać o automatycznym przekierowaniu 301 wersji niezabezpieczonych z przedrostkiem „http://” do wersji z certyfikatem „https://”. Może się zdarzyć sytuacja, że zamiast zielonej kłódki w pasku adresu występuje powiadomienie o braku zabezpieczeń. Takie powiadomienie będzie również widoczne, jeśli certyfikat jest wdrożony poprawnie, ale na stronie występuje tzw. mixed content, czyli część zasobów (np. grafiki) ładują się bez wykorzystania certyfikatu SSL – wtedy trzeba poprawić linki do wszystkich zasobów. </strong></p><p></p><img src="images/9.1.png" width="500" alt="Certyfikat SSL"><p></p><p>Dla sklepów internetowych rekomendujemy posiadanie certyfikatu minimum DV, czyli Domain Validation – takie certyfikaty kosztują zwykle niewiele, bo kilkadziesiąt złotych, a gwarantują bezpieczeństwo transakcji. Cechuje je tzw. kłódeczka w pasku adresu, ale nie wyświetla się nazwa organizacji, jak ma to miejsce na stronie banku.</p><p>Certyfikat SSL oprócz samego zabezpieczenia wpływa również pozytywnie na ranking strony w wynikach wyszukiwania.</p>',
  },
  {
    id: 9.2,
    name: "Powiadomienie o ciasteczkach",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Powiadomienie o ciasteczkach</subheader><p>Ciasteczka (tzw. cookies) to małe pliki zapisywane w pamięci przeglądarki internetowej przez stronę internetową. Mają za zadanie zapamiętywać ustawienia użytkownika, np. sposób sortowania w kategoriach wg cen. Są różne typy ciasteczek, niektóre kasują się automatycznie po wyłączeniu przeglądarki lub upływie konkretnego czasu.</p><p><strong>Zgodnie z ustawą Prawa Telekomunikacyjnego z dnia 22 marca 2013 roku, która mówi o obowiązku informacyjnym odnoszącym się do przetwarzania plików cookies, trzeba uzyskać zgodę internauty do wykorzystania tzw. ciasteczek na stronie internetowej. Celem tej regulacji ma być zwiększenie świadomości użytkowników na temat stosowanych technologii gwarantujących dostarczanie treści lepiej dostosowanej do ich preferencji i zainteresowań.</strong></p><p>Informację o ciasteczkach trzeba umieścić zawsze, gdy sklep internetowy:</p><ul><li>wykorzystuje ciasteczka do zapamiętywania sesji, np. logowania,</li><li>pamięta spersonalizowane ustawienia użytkowników, np. sposób sortowania czy język,</li><li>korzysta z narzędzi do statystyk, np. Google Analytics,</li><li>korzysta z narzędzi firm trzecich, np. do chatu na stronie,</li><li>pamięta towary dodane do koszyka.</li></ul><p>Powiadomienie powinno wyświetlać się w obrębie całej strony internetowej do momentu zaakceptowania przez użytkownika. W synergii z SEO popup informujący o ciasteczkach nie może zakrywać całej strony, nie zaleca się też zaciemniania strony.</p>',
  },
  {
    id: 9.3,
    name: "Polityka prywatności + informacja o RODO",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Polityka prywatności + informacja o RODO</subheader><p>Polityka prywatności stanowi jedną z wielu formalności obowiązkowych dla właściciela sklepu online. Jej zadaniem jest poinformowanie użytkowników o sposobie oraz celu przetwarzania i wykorzystywania ich danych osobowych.</p><p><strong>Dokument polityki prywatności oprócz spełnienia obowiązku informacyjnego wynikającego z ustawy o ochronie danych osobowych, ustawy prawa telekomunikacyjnego i rozporządzenia RODO, jest jednym z elementów budowania zaufania użytkowników do sklepu online. Zawarte są w nim informacje o przedsiębiorcy i przedstawione prawa, jakie użytkownik ma do swoich danych. Wyjaśnia on też kwestię potrzeby zbierania takich danych.</strong></p><p>Na potrzeby naszej analizy sprawdziliśmy, czy polityka prywatności znajduje się w sklepie i czy została podlinkowana w stopce. W celu weryfikacji poprawności prawnej pod kątem przepisów RODO zalecamy konsultację z prawnikiem.</p><p>Ciekawostka: jeżeli strona internetowa nie zbiera danych (np. prosta strona firmowa bez formularza kontaktowego i kodu śledzenia), nie zachodzi obowiązek publikacji takiego dokumentu. Jeśli jednak na stronie zostanie zainstalowany kod śledzący, np. Google Analytics lub HotJar, który służy do profilowania użytkowników, to taki obowiązek już jest.</p><p></p>',
  },
  {
    id: 9.4,
    name: "Informacja o zwrotach",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Informacja o zwrotach</subheader><p>Sklep internetowy odróżnia od stacjonarnego możliwość zwrotu towaru bez podania przyczyny, z której chętnie korzystają klienci. Wynika to ze specyfiki zakupów w internecie, których dokonuje się bez fizycznego kontaktu z przedmiotem. To właśnie powoduje, że klienci sklepów online mają większe prawa niż ci, którzy dokonali zakupu w sklepie stacjonarnym. Mówi o tym art. 27 ustawy o prawach konsumenta.</p><p>Jeśli ten punkt wymaga poprawy, naszą rekomendacją jest utworzenie dedykowanej podstrony z gotowym formularzem zwrotu i podlinkowanie jej w widocznym miejscu w stopce. Na tej podstronie trzeba przedstawić procedurę zwrotu i adres wysyłki towaru.</p><p></p>',
  },
  {
    id: 9.5,
    name: "Regulamin",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Regulamin</subheader><p>Posiadanie regulaminu jest warunkiem koniecznym, definiuje to Ustawa o świadczeniu usług drogą elektroniczną z dnia 18 lipca 2002 roku (Dz. U. 2002 Nr 144, poz. 1204). W myśl tej ustawy każdy usługodawca ma obowiązek udostępnić nieodpłatnie regulamin świadczenia usługi kupującemu przed zawarciem umowy.</p><p><strong>Regulamin sklepu musi nie tylko definiować zasady świadczenia usług, ale też powinien być spójny z obowiązującymi przepisami.</strong></p><p>Na potrzeby naszej analizy sprawdziliśmy, czy regulamin znajduje się w sklepie i czy został podlinkowany w stopce. W celu weryfikacji poprawności pod kątem przepisów prawnych zalecamy konsultację z prawnikiem.</p>',
  },
  {
    id: 10,
    name: "Odbiór strony przez użytkowników",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Odbiór strony przez użytkowników</subheader><p style="margin-bottom: 0;">W tym module zweryfikujemy elementy, które mogą mieć negatywny wpływ na odczucia użytkowników podczas korzystania ze strony internetowej. Poddamy weryfikacji m.in.:</p><ul><li>optymalny czas pełnego załadowania się strony,</li><li>występowanie irytujących wyskakujących okienek,</li><li>błędy utrudniające korzystanie ze sklepu, np.: <ul><li>nachodzenie elementów,</li><li>zbyt małe elementy.</li></ul></li></ul><p>Weryfikowane elementy nie zawsze są oczywiste, ale każdy z wymienionych powyżej może spowodować rosnącą irytację użytkownika, która finalnie doprowadzi do opuszczenia strony internetowej.</p><p>Takie elementy jak niepoprawnie działający interfejs graficzny czy długi czas odpowiedzi serwera mogą z perspektywy potencjalnego klienta sprawiać wrażenie, że strona internetowa jest  niedopracowana. To niesie za sobą ogromne zagrożenie – mocno obniża motywację zakupową z powodu obawy przed oszustwem.</p><p></p>',
  },
  {
    id: 10.1,
    img: "/img/views/checklist-for-ecommerce/10.1.png",
    name: "Optymalny czas pełnego załadowania się strony",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Optymalny czas pełnego załadowania się strony</subheader><p>Zapoznając się z ofertą, przyszły klient przemieszcza się po kategoriach i produktach, przegląda podstronę po podstronie. Wolno działający sklep może generować bardzo wysoki współczynnik odrzuceń. Długi czas ładowania się strony internetowej powoduje frustrację, co może mocno wpłynąć na podjęcie decyzji o zakupie.</p><p>Przyjmuje się, że optymalny czas odpowiedzi serwera TTFB, czyli do pobrania pierwszego bajta strony internetowej, powinien wynosić poniżej 200 ms, a zgodnie z nowymi wytycznymi Core Web Vitals, pierwsza interakcja na stronie powinna być możliwa w ciągu 100ms.</p><p></p><img src="images/10.1.png" width="600" alt="Optymalny czas pełnego załadowania się strony"><p></p><p>Prędkość działania strony oprócz samego odbioru strony przez użytkowników ma bezpośredni wpływ na pozycje osiągane przez stronę internetową. Dlatego, jeśli nie da się poprawić wyników, optymalizując kod źródłowy sklepu, trzeba zastanowić się nad zwiększeniem pakietu serwera hostingowego lub rozważyć migrację na inny – szybszy serwer. Nie jest to możliwe w przypadku sklepów typu SaaS. Konieczna jest wtedy konsultacja z dostawcą oprogramowania i znalezienie odpowiedniego rozwiązania.</p><p>Więcej informacji na temat wydajności znajduje się pod poniższym linkiem:</p><p><a href="https://developers.google.com/speed/pagespeed/insights/?hl=pl">https://developers.google.com/speed/pagespeed/insights/?hl=pl</a> </p><p></p>',
  },
  {
    id: 10.2,
    img: "/img/views/checklist-for-ecommerce/10.2.png",
    name: "Niepoprawnie działające wyskakujące okienka",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Niepoprawnie działające wyskakujące okienka</subheader><p>Wyskakujące okienka, tzw. popup, służą do wyświetlania dodatkowego elementu call to action, np. prośby o pozostawienie numeru telefonu lub zapisanie się do newslettera. Mogą również informować o bieżących promocjach w sklepie lub cenzurować zawartość w przypadku użytkowników niepełnoletnich.</p><p>Typowym błędem powodującym złe zachowanie się okienek w sklepie jest niezapisanie informacji w plikach pamięci przeglądarki, tzw. cookies, które pamiętają zamknięcie okna. </p><p>Ważne też, aby zamknięcie wyskakującego okienka było możliwie intuicyjne. Nie stosuje się niewidocznych przycisków zamykania ani nie umieszcza ich w nieintuicyjnym miejscu, np. na dole. Wyjątek stanowią okienka cenzurujące treść, np. w sklepach z artykułami erotycznymi lub alkoholami.</p><p></p><img src="images/10.2.png" width="500" alt="Niepoprawnie działające wyskakujące okienka"><p></p><p>Jeśli test nie został zaliczony, rekomendujemy, aby wyzwalanie okienek było przemyślane. Wszystkie okienka nie mogą pojawiać się od razu po załadowaniu strony. Należy ustawić odpowiednie wyzwalacze, opierając się na czasie i zachowaniu użytkownika, np. przejście przez 2 podstrony, czas minimum 45 sekund od wejścia na stronę i ruch kursorem do górnej belki przeglądarki (chęć opuszczenia strony).</p><p>Trzeba pamiętać, aby przycisk zamykania okienka "X" znajdował się w prawym górnym rogu. To naturalne miejsce, w którym spodziewają się go użytkownicy. Dobrą praktyką jest automatyczne zamknięcie okienka po kliknięciu obszaru poza okienkiem.</p><p></p>',
  },
  {
    id: 10.3,
    img: "/img/views/checklist-for-ecommerce/10.3.png",
    name: "Elementy nachodzące na siebie, błędy renderowania",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Elementy nachodzące na siebie, błędy renderowania</subheader><p>Błędy renderowania interfejsu graficznego mogą powodować problemy z obsługą sklepu lub zwyczajnie doprowadzać do dezorientacji użytkowników. Występowanie takich niedociągnięć sprawia wrażenie niedokończonego sklepu w wersji roboczej.</p><p>Nachodzące elementy mogą wynikać z błędów konstrukcji w stylach CSS lub konfliktów JavaScript.</p><p></p><img src="images/10.3.png" width="500" alt="Elementy nachodzące na siebie, błędy renderowania"><p></p><p>Jeśli ten test nie został zaliczony, to rekomendujemy, aby podczas projektowania szablonu strony unikać w stylach CSS pozycjonowania elementów na stronie w sposób absolutny i przekazać do swojego webmastera prośbę o zweryfikowanie występowania na stronie konfliktów JavaScript.</p>',
  },
  {
    id: 10.4,
    img: "/img/views/checklist-for-ecommerce/10.4.png",
    name: "Zbyt małe czcionki",
    status: "",
    content:
      '<subheader class="subheader pdf-pagebreak-before">Zbyt małe czcionki</subheader><p>Projektując sklep, trzeba mieć na uwadze czytelność treści. Często spotykanym zabiegiem jest umieszczanie treści wspomagających pozycjonowanie serwisu tak, aby były ukryte dla użytkownika lub niezbyt absorbujące podczas obsługi sklepu.</p><p></p><img src="images/10.4.png" width="500" alt="Zbyt małe czcionki"><p></p><p>Jeżeli ten test nie został zaliczony, rekomendujemy, aby czcionki na stronie internetowej nie były mniejsze niż 11 pikseli.</p><p>Oprócz samej wielkości tekstu należy zwrócić uwagę na ogólne formatowanie:</p><ul><li>unikanie ścian tekstu,</li><li>podział na akapity,</li><li>zastosowanie śródtytułów (H2/H3),</li><li>listy punktowane.</li></ul><p>Powyższe elementy nadają ogólnej czytelności i ułatwiają nawigację wzrokową w celu szybszego wyłapania istotnych kwestii.</p><ul><li></li></ul>',
  },
];

export const textData = {
  introduction:
    "<p>Przygotowaliśmy analizę sklepu internetowego pod kątem interfejsu użytkownika. Zawarliśmy w niej najważniejsze z punktu widzenia użytkownika elementy, które korelują z przyzwyczajeniami Twoich potencjalnych klientów. Staraliśmy się wyłapać te kwestie, które mogą utrudniać obsługę i obniżać chęć finalizacji zakupów.</p><p>Analizę przeprowadziliśmy na podstawie zbioru ogólnoprzyjętych reguł i własnych doświadczeń. W zależności od potrzeb weryfikujemy poprawność w zakresie najważniejszych elementów:</p><ul><li>wersji mobilnej,</li><li>nagłówka strony,</li><li>użyteczności kategorii,</li><li>użyteczności produktu:<ul><li>obszar ATF,</li><li>obszar BTF,</li></ul></li><li>wpisów blogowych,</li><li>podstrony kontaktowej,</li><li>użyteczności stopki,</li><li>elementów budujących zaufanie,</li><li>elementów odpowiedzialnych za bezpieczeństwo,</li><li>odbioru strony przez użytkowników.</li></ul><p>Dzięki naszemu raportowi dowiesz się, co trzeba poprawić w kwestii interfejsu Twojego sklepu.</p><p>Prezentowany raport stanowi wstęp do procesu CRO (ang. Conversion Rate Optimization), czyli poprawiania biznesowej skuteczności sklepu internetowego poprzez podniesienie współczynnika konwersji.</p><p><strong>Jeśli jesteś zainteresowany pełnym Audytem UX z uwzględnieniem badania zachowań użytkowników w Twoim sklepie, koniecznie skontaktuj się z nami. Przedstawimy Ci dostępne możliwości.</strong></p>",
};

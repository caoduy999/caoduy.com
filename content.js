
function getQueryParam(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : null;
}
var lang = getQueryParam('lang') || 'de';

$(document).ready(function () {
    $(function () {
        var linksToAnchors = $('a[href*=#]:not([href=#])');
        linksToAnchors.click(function () {
            var target = $('[name=' + this.hash.slice(1) + ']');
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000, 'easeInOutQuint');
        });
    });
});

angular.module('myApp', []).controller('myCtrl', function ($scope) {
    $scope.picture = 'caoduy.jpg';
    $scope.lang = lang;
    $scope.lastUpdated = '04.2026'; // AUTO-UPDATED BY GIT HOOK ... siehe ls -lisa ./.git/hooks/pre-commit

    $scope.labels = lang === 'en' ? {
        aboutMeLabel: 'About me',
        aboutMeText: 'For 20 years, I\'ve worked in very different organizations – and yet I often feel as if I had just left university. My curiosity has remained the same, only my perspective has grown calmer. I have learned to formulate technical complexity in a way that is clear and manageable for everyone involved. This calm stems from many years of experience and the confidence to handle even complex topics with competence.',
        languagesLabel: 'Languages:',
        mobileLabel: 'Mobile:',
        emailLabel: 'Email:',
        galleryLabel: 'Gallery:',
        lastUpdatedLabel: 'Last updated:',
        certsHeader: 'Education / Certificates',
        techHeader: 'Technologies (selection)',
        projectsHeader: 'Projects (selection)',
        refHeader: 'References',
        techStackLabel: 'Technology stack:',
        pdfUrl: 'caoduy_en.pdf',
    } : {
        aboutMeLabel: 'Über mich',
        aboutMeText: 'Seit 20 Jahren bewege ich mich in sehr unterschiedlichen Organisationen – und dennoch habe ich oft das Gefühl, gerade erst aus dem Studium zu kommen. Meine Neugier ist geblieben, nur mein Blick ist ruhiger geworden. Ich habe gelernt, technische Komplexität so zu formulieren, dass sie für alle verständlich und handhabbar wird. Diese Ruhe gründet auf langjähriger Erfahrung und dem sicheren Gefühl, auch komplexe Themen souverän meistern zu können.',
        languagesLabel: 'Sprachen:',
        mobileLabel: 'Mobil:',
        emailLabel: 'Email:',
        galleryLabel: 'Gallerie:',
        lastUpdatedLabel: 'Zuletzt geändert:',
        certsHeader: 'Ausbildung / Zertifikate',
        techHeader: 'Technologien (Auswahl)',
        projectsHeader: 'Projekte (Auswahl)',
        refHeader: 'Referenzen',
        techStackLabel: 'Technologien:',
        pdfUrl: 'caoduy_de.pdf',
    };

    $scope.languages = lang === 'en' ? [
        'Vietnamese (native)',
        'German (native level)',
        'English (fluent)'
    ] : [
        'Vietnamesisch (Muttersprache)',
        'Deutsch (auf muttersprachlichem Niveau)',
        'English (verhandlungssicher)'
    ];

    $scope.certs = lang === 'en' ? [
        'Diplom-Wirtschaftsinformatiker (FH) - Final thesis graded "very good" (1.0 / highest)',
        'AWS Certified Solutions Architect - Associate',
        'AWS Certified Developer - Associate',
        'AWS Certified AI Practitioner',
    ] : [
        'Diplom-Wirtschaftsinformatiker (FH) - Diplomarbeit auf Deutsch, Note: sehr gut',
        'AWS Certified Solutions Architect - Associate',
        'AWS Certified Developer - Associate',
        'AWS Certified AI Practitioner',
    ];

    $scope.technologies = lang === 'en' ? [
        { category: 'Java & Ecosystem',   description: 'Kotlin, Java 8/11/17/21, Quarkus, Spring, Jakarta EE' },
        { category: 'Frontend Ecosystem', description: 'Typescript, npm, Vite, React, Vue' },
        { category: 'Cloud & Containers', description: 'AWS, Azure, Docker, Kubernetes, helm' },
        { category: 'Database & Tools',   description: 'Oracle, PLSQL, MongoDB, Milvus, Pinecone, Postgres, SQL, Liquibase' },
        { category: 'Testing',            description: 'unit, integration, e2e, testcontainers, vitest, selenium, SonarQube' },
        { category: 'DevOps',             description: 'Jenkins, Linux, Shell, Prometheus, Grafana, Maven, Gradle, Git' },
    ] : [
        { category: 'Java & Ecosystem',   description: 'Kotlin, Java 8/11/17/21, Quarkus, Spring, Jakarta EE' },
        { category: 'Frontend Ecosystem', description: 'Typescript, npm, Vite, React, Vue' },
        { category: 'Cloud & Containers', description: 'AWS, Azure, Docker, Kubernetes, helm' },
        { category: 'Datenbanken',        description: 'Oracle, PLSQL, MongoDB, Milvus, Pinecone, Postgres, SQL, Liquibase' },
        { category: 'Testing',            description: 'unit, integration, e2e, testcontainers, vitest, selenium, SonarQube' },
        { category: 'DevOps',             description: 'Jenkins, Linux, Shell, Prometheus, Grafana, Maven, Gradle, Git' },
    ];

    var projectsData = [
        {
            time: '03/2025 - dato',
            time_en: 'Since 03/2025',
            company: 'Senior Fullstack Developer',
            companyDescr: '(Branche: Gesundheitswesen)',
            companyDescr_en: '(Sector: Healthcare)',
            description: [
                'Entwurf und Entwicklung versch. Web-Anwendungen zu Qualitätssicherungs- und Abrechnungszwecken.'
            ],
            description_en: [
                'Design and development of web applications supporting quality assurance and billing processes for healthcare providers.'
            ],
            techStack: 'KOTLIN, JAVA, GRADLE, HELM, KUBERNETES, K9S, DOCKER, TESTCONTAINERS, S3, ' +
                'SELENIUM, REACT, PRIME REACT, TAILWIND, CSS, VUE, VITE, DOM TESTING, E2E TESTS, SPRING BOOT, INTELLIJ, GIT, JUNIT, MOCKITO, WIREMOCK, ' +
                'SPRING SECURITY, OAUTH, JPA, ORM, HIBERNATE, RENOVATE, REDIS, SONAR, BITBUCKET, JENKINS, GROOVY, MINIO, ' +
                'VAULT, PROMETHEUS, GRAFANA, REST, RABBIT MQ, RESILIENT4J, ARCHUNIT, XML VERSCHLÜSSLUNG, LOCALSTACK '
        },
        {
            time: '09/2024 - 03/2025',
            company: 'Cloud Developer & Architekt',
            company_en: 'Cloud Developer & Architect',
            companyDescr: '(Branche: Energie)',
            companyDescr_en: '(Sector: Energy and supply)',
            description: [
                'Entwurf und Entwicklung eines skalierbaren Vertriebsportals auf Basis des AWS Serverless Stack mit ' +
                'integrierter Generative-AI – ausgelegt auf hohe Skalierbarkeit und Kosteneffizienz.'
            ],
            description_en: [
                'Design and development of a scalable sales portal based on the AWS serverless stack ' +
                'with integrated generative AI - designed for high scalability and cost efficiency.'
            ],
            techStack: 'QUARKUS NATIVE, MAVEN, GIT, GITHUB ACTIONS, KOTLIN, TYPESCRIPT, VUE, VUETIFY, VITE, AWS BEDROCK, RETRIEVAL AUGMENTED GENERATION (RAG), ' +
                'AWS CDK/CLOUDFORMATION, AWS COGNITO, AWS ROUTE-53, AWS CLOUDFRONT, AWS API-GATEWAY, AWS LAMBDA, AWS DYNAMO-DB, AWS S3, AWS SECRET MANAGER, AWS CERTIFICATION MANAGER...'
        },
        {
            time: '01/2024 - 06/2024',
            company: 'Senior Developer & Architekt',
            company_en: 'Senior Developer & Architect',
            companyDescr: '(Branche: Automobil & Fertigung)',
            companyDescr_en: '(Sector: Automotive & Manufacturing)',
            description: [
                'Entwicklung mobiler Datenerfassungsanwendungen für Industrie-Handhelds (z.B. Zebra) bei ' +
                'einem international tätigen Premium-Automobilhersteller – mit Fokus auf Bauteilverwaltung und Kommissionierung in der Logistik- und Produktionsumgebung.'
            ],
            description_en: [
                'Development of mobile data capture applications for industrial handhelds (e.g. Zebra) at ' +
                'an internationally active premium automobile manufacturer - with a focus on component management and order picking in the logistics and production environment.'
            ],
            techStack: 'JAVA, DOCKER, TEST-CONTAINER, POSTGRESQL, ORM, GRADLE, GIT, JWT, SPRING BOOT (SECURITY, WEB, DATA), ' +
                'JPA, PAYARA 5/6, JAKARTA EE 9/10, ANDROID, ZEBRA, VUE, VUETIFY, VITE, WEBPACK, JUNIT, MOCKITO'
        },
        {
            time: '01/2023 - 02/2024',
            company: 'Senior Fullstack Developer',
            companyDescr: '(Branche: Gesundheitswesen)',
            companyDescr_en: '(Sector: Healthcare)',
            description: [
                'Optimierung und Weiterentwicklung einer DevSecOps-orientierten Dokumentationsplattform für Arztpraxen ' +
                'und medizinische Einrichtungen unter Berücksichtigung höchster Securityanforderungen.'
            ],
            description_en: [
                'Optimization and further development of a DevSecOps-oriented documentation platform ' +
                'for medical practices and medical facilities, taking into account the highest security requirements.'
            ],
            techStack: 'JAVA 17/21, KOTLIN, INTELLIJ, GIT, JUNIT, MOCKITO, WIREMOCK, GRADLE, HELM, KUBERNETES, DOCKER, TESTCONTAINERS, AWS S3, LOCALSTACK, MINIO, ' +
                'SELENIUM, REACT, PRIME REACT, TAILWIND, CSS, VUE, VITE, DOM TESTING, E2E TESTS, SPRING BOOT 2/3, SPRING SECURITY, OAUTH, JPA, ORM, HIBERNATE, RENOVATE, ' +
                'REDIS, SONAR, BITBUCKET, JENKINS, GROOVY, VAULT, PROMETHEUS, GRAFANA, REST, RABBIT MQ, RESILIENT4J, ARCHUNIT, SAXON '
        },
        {
            time: '05/2021 - 12/2022',
            company: 'Fullstack Cloud Developer',
            companyDescr: '(Branche: Energie und Versorgung)',
            companyDescr_en: '(Sector: Energy and supply)',
            description: [
                'Implementierung einer skalierbaren Helpdesk-Plattform auf Microsoft Azure für einen führenden deutschen Energiekonzern.'
            ],
            description_en: [
                'Implementation of a scalable helpdesk platform on Microsoft Azure for a leading German energy company.'
            ],
            techStack: 'SPRING BOOT, SPRING CLOUD, GIT, JAVA, GRADLE, JUNIT, TDD, SONAR, FINDBUGS, MS AZURE, RESILIENT4J,' +
                'MICROMETER, WIREMOCK, MONGO DB, DOCKER, TESTCONTAINER, SELENIUM, APACHE KAFKA, GRAFANA, INTELLIJ, SOAP, REST'
        },
        {
            time: '06/2017 - 04/2021',
            company: 'Fullstack Developer',
            companyDescr: '(Branche: Gesundheitswesen)',
            companyDescr_en: '(Sector: Healthcare)',
            description: [
                'Optimierung und Weiterentwicklung webbasierter Anwendungen wie Abrechnungssysteme und Mitgliederportale ' +
                'für medizinische Einrichtungen in Bayern und Baden-Württemberg.'
            ],
            description_en: [
                'Optimization and further development of web-based applications such as billing systems and member portals ' +
                'for medical facilities in Germany (Bavaria and Baden-Württemberg).'
            ],
            techStack: 'JAVA, SPRING-BOOT, INTELLIJ, GUAVA, MAVEN, GRADLE, TEAM-CITY, CCD, TDD, CI/CD, GIT, VUE, WEBPACK, WICKET, ' +
                'FLYWAY, SELENIUM, RABBIT-MQ, CUCUMBER, GHERKIN, JUNIT, XML, XSD, XSLT, JUNIT 5, DOCKER, TESTCONTAINERS'
        },
        {
            time: '01/2016 - 06/2017',
            company: 'Backend Developer',
            companyDescr: '(Branche: Finanzdienstleiter)',
            companyDescr_en: '(Sector: Financial services)',
            description: [
                'Weiterentwicklung von Bankanwendungen im Rahmen der regulatorischen Vorgaben unter strikter Aufsicht der BaFin.'
            ],
            description_en: [
                'Further development of banking applications in line with regulatory requirements under the strict supervision of BaFin.'
            ],
            techStack: 'JAVA 6/7/8/9, ORACLE DB, SPRING, SOAP, REST, JENKINS, SONAR, JPA, SVN, VAADIN, XML, XSLT, MAVEN, SONAR'
        },
        {
            time: '05/2014 - 12/2015',
            company: 'Agile Developer',
            companyDescr: '(Branche: Energie und Versorgung)',
            companyDescr_en: '(Sector: Energy and supply)',
            description: [
                'Konzeption und Entwicklung einer webbasierten Self-Service-Lösung zur automatisierten Abwicklung von Energie-Deals (Gas/Strom) für Geschäftskunden.'
            ],
            description_en: [
                'Design and development of a web-based self-service solution for the automated processing of energy deals (gas/electricity) for business customers.'
            ],
            techStack: 'APACHE TOMCAT, JAVA 6/7/8, SPRING, JPA, MAVEN, CI/CD, JUNIT, MOCKITO, AWS S3, JENKINS, FLYWAY, LOMBOK, APACHE WICKET, INTELLIJ, SVN'
        },
        {
            time: '06/2011 - 05/2014',
            company: 'Fullstack Developer & Architekt',
            company_en: 'Fullstack Developer & Architect',
            companyDescr: '(Branche: Flughafenbetrieb / Luftverkehrsinfrastruktur)',
            companyDescr_en: '(Sector: Airport operations)',
            description: [
                'Konzeption und Umsetzung einer mobilen Kommunikationsplattform mit Echtzeit-Distribution zur ' +
                'Koordination von Ground-Handling-Prozessen an einem der größten Flughäfen Deutschlands.',
            ],
            description_en: [
                'Design and implementation of a mobile communication platform with real-time distribution for the coordination of ground handling processes at one of Germany\'s largest airports.',
            ],
            techStack: 'GLASSFISH, JSP, JSF, PRIMEFACE, JAVA SE, JAVA EE, JMS, ECLIPSE IDE, XML, XSLT, ' +
                'JUNIT, SOAP, CORBA, ZEBRA HANDHELD, JAVA SWING, JAVA AWT, WEBSOCKET, HTTP LONG POLLING, JQUERY, HTML, CSS'
        },
        {
            time: '01/2011 - 06/2011',
            company: 'Senior Backend Developer',
            companyDescr: '(Branche: Halbleiterindustrie / Mikrotechnologie)',
            companyDescr_en: '(Sector: Semiconductor industry / Microtechnology)',
            description: [
                'Konzeption und Implementierung leistungsstarker, multithreaded Java-Services zur effizienten ' +
                'Übertragung und Verwaltung großer Volumina von Maskendaten (für die Herstellung von Chip-Masken).'
            ],
            description_en: [
                'Design and implementation of high-performance, multi-threaded Java services for the efficient transfer ' +
                'and management of large volumes of mask data (for the production of chip masks).'
            ],
            techStack: 'JAVA 6, ECLIPSE IDE, ACTIVEMQ, TOMCAT, SPRING MVC, SPRING CORE, UML, SVN, LOG4J, JUNIT, ORACLE-DB, JAVA CONCURRENT'
        },
        {
            time: '03/2010 - 12/2010',
            company: 'Software-Entwickler',
            company_en: 'Java-Developer',
            companyDescr: '(Branche: Telekommunikation & Internet-Service-Provider)',
            companyDescr_en: '(Sector: Telecommunications & Internet Service Providers)',
            description: [
                'Aufbau und Entwicklung eines leistungsfähigen E-Mail-Dienstes für den Massenmarkt im Bereich Mail- und Webhosting bei einem der führenden Internetanbieter Deutschlands.'
            ],
            description_en: [
                'Establishment and development of a high-performance e-mail service for the mass market in the mail ' +
                'and web hosting sector at one of Germany\'s leading Internet providers.'
            ],
            techStack: 'JAVA, TOMCAT, HUDSON, SVN, SPRING, REST, SOAP, ECLIPSE, SQL, XML, XSLT, JUNIT, LOG4J, ' +
                'JAX-RS, JMS, QUARZT, JMETER, JMX, MOCKITO, POWERMOCK, SELENIUM, SONAR, PRIMEFACE, UNIX, SHELL'
        },
        {
            time: '03/2009 - 12/2009',
            company: 'Java Entwickler',
            company_en: 'Java-Developer',
            companyDescr: '(Branche: Telekommunikation)',
            companyDescr_en: '(Sector: Telecommunications)',
            description: [
                'Entwicklung und Customizing einer Ringbacktone-(RBT)-Anwendung für den internationalen Massenmarkt. ' +
                'In diesem Rahmen wurden maßgeschneiderte RBT-Lösungen erfolgreich an Etisalat (Ägypten), AT&T (USA), Rogers (Kanada) und Vodafone ausgeliefert.'
            ],
            description_en: [
                'Development and customizing of a ring back tone (RBT) application for the international mass market. ' +
                'In this context, customized RBT solutions were successfully delivered to Etisalat (Egypt), AT&T (USA), ' +
                'Rogers (Canada) and Vodafone.'
            ],
            techStack: 'JAVA, SVN, APACHE TOMCAT, APACHE TILES, SPRING WS, SPRING MVC, UNIX, SHELL, ' +
                'XFIRE, CXF, XML, SOAP, JUNIT, ANT, HUDSON, TDD, LOG4J, STRUST, CHECKSTYLE, RESTFULL, AJAX, HTTP'
        },
        {
            time: '09/2006 - 12/2008',
            company: 'Software-Entwickler & Teilprojektleiter',
            company_en: 'Software developer & subproject manager',
            companyDescr: '(Branche: Telekommunikation)',
            companyDescr_en: '(Sector: Telecommunications)',
            description: [
                'Entwicklung verschiedener Produkte innerhalb des Order Management Systems (OMS) eines führenden Schweizer Telco-Konzern.'
            ],
            description_en: [
                'Development of various products within the Order Management System (OMS) of a leading Swiss telco group.'
            ],
            techStack: 'IBM WEBSPHERE, JAVA ENTERPRISE (J2EE), CVS, SVN, ECLIPSE, JAVA, JSP, JSF, EJB, ' +
                'MAVEN, JUNIT, ORACLE, XML, XSLT, SOAP, JMX, SPRING, HIBERNATE, EASYMOCK, TDD, SOA, UNIX, SHELL '
        },
        {
            time: '02/2005 - 08/2006',
            company: 'Software-Entwickler',
            company_en: 'Software developer',
            companyDescr: '(Branche: Logistik)',
            companyDescr_en: '(Sector: Logistic)',
            description: [
                'Entwicklung einer PL/SQL-basierten Software zur Optimierung von Zustellrouten für Brief- und Paketboten bei Deutschlands größtem Post- und Logistikdienstleister.'
            ],
            description_en: [
                'Development of PL/SQL-based software to optimize delivery routes for letter and parcel carriers ' +
                'at Germany\'s largest postal and logistics service provider.'
            ],
            techStack: 'ORACLE, PL-SQL, PLAN UML, CVS, PERL, RUBY, UNIX, SHELL, JAVA'
        }
    ];

    $scope.projects = projectsData.map(function (p) {
        return {
            time:        lang === 'en' ? (p.time_en        || p.time)        : p.time,
            company:     lang === 'en' ? (p.company_en     || p.company)     : p.company,
            companyDescr:lang === 'en' ? (p.companyDescr_en|| p.companyDescr): p.companyDescr,
            description: lang === 'en' ? (p.description_en || p.description) : p.description,
            techStack:   p.techStack,
            pageBreak:   p.pageBreak
        };
    });

    $scope.references = [
        {
            title: 'Projectmanager, telecommunications service provider',
            details: '"[...]I can give him the highest possible recommendation to any future employer. ' +
                'He is a team player and a great person. [...]"'
        },
        {
            title: 'Domainverantwortlichen, führendes Schweizer Telco-Unternehmen',
            details: '"[...] er besitzt ein umfassendes und hervorragendes Fachwissen, ' +
                'mit dessen Hilfe er auch überaus schwierige Fragen sehr erfolgreich löste.[...]"'
        },
        {
            title: 'Referenz durch einen Internet-Provider',
            details: '"[...] Auch in herausfordernden Situationen bewahrte er stets den Überblick und traf verantwortungsvolle Entscheidungen. [...]"'
        },
        {
            title: 'Referenz von einem Logistikunternehmen',
            details: '"[...] Die Zusammenarbeit mit ihm war nicht nur effektiv, sondern auch richtig angenehm – fachlich top und menschlich super. [...]"'
        },
    ];

    $scope.print = function () {
        window.setTimeout(function () {
            window.print();
        }, 1000);
    }

}).directive('printContact', function () {
    return {
        restrict: 'AEC',
        template: $('.printContactTemplate').prop('outerHTML').replace('hidden', '')
    };
});

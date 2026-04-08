
$(document).ready(function() {
    $(function() {
        var linksToAnchors = $('a[href*=#]:not([href=#])');
        linksToAnchors.click(function() {
            var target = $('[name=' + this.hash.slice(1) +']');
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000, 'easeInOutQuint');
        });
    });
});

angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.picture = 'caoduy.jpg';

    $scope.coreCompetencies = 'Java/Kotlin-, Spring, K8S, AWS';

    $scope.certs = [
        'Diplom-Wirtschaftsinformatiker (FH) - Diplomarbeit auf Deutsch, Note: sehr gut',
        'AWS Certified Solutions Architect - Associate',
        'AWS Certified Developer - Associate',
        'AWS Certified AI Practitioner',
    ];

    $scope.technologies = [
        {
            category:'Java & Ecosystem',
            description: 'Kotlin, Java 8/11/17/21, Quarkus, Spring, Jakarta EE'
        },

        {
            category:'Frontend Ecosystem',
            description: 'Typescript, npm, Vite, React, Vue'
        },

        {
            category:'Cloud & Containers',
            description: 'AWS, Azure, Docker, Kubernetes, helm'
        },

        {
            category:'Datenbanken',
            description: 'Oracle, PLSQL, MongoDB, Milvus, Pinecone, Postgres, SQL, Liquibase'
        },

        {
            category:'Testing',
            description: 'unit, integration, e2e, testcontainers, vitest, selenium, SonarQube'
        },

        {
            category:'DevOps',
            description: 'Jenkins, Linux, Shell, Prometheus, Grafana, Maven, Gradle, Git'
        },
    ]

    $scope.projects = [
        {
            time:'03/2025 - dato',
            company:'Senior Fullstack Developer',
            companyDescr:'(Branche: Gesundheitswesen)',
            description:[
                'Entwurf und Entwicklung versch. Web-Anwendungen zu Qualitätssicherungs- und Abrechnungszwecken.'
            ],
            techStack:'KOTLIN, JAVA, GRADLE, HELM, KUBERNETES, K9S, DOCKER, TESTCONTAINERS, S3, ' +
                'SELENIUM, REACT, PRIME REACT, TAILWIND, CSS, VUE, VITE, DOM TESTING, E2E TESTS, SPRING BOOT, INTELLIJ, GIT, JUNIT, MOCKITO, WIREMOCK, ' +
                'SPRING SECURITY, OAUTH, JPA, ORM, HIBERNATE, RENOVATE, REDIS, SONAR, BITBUCKET, JENKINS, GROOVY, MINIO, ' +
                'VAULT, PROMETHEUS, GRAFANA, REST, RABBIT MQ, RESILIENT4J, ARCHUNIT, XML VERSCHLÜSSLUNG, LOCALSTACK '
        },
        {
            time:'09/2024 - 03/2025',
            company: 'Cloud Developer & Architekt',
            companyDescr:'(Branche: Energie)',
            description:[
                'Entwurf und Entwicklung eines skalierbaren Vertriebsportals auf Basis des AWS Serverless Stack mit ' +
                'integrierter Generative-AI – ausgelegt auf hohe Skalierbarkeit und Kosteneffizienz.'
            ],
            techStack:'QUARKUS NATIVE, MAVEN, GIT, GITHUB ACTIONS, KOTLIN, TYPESCRIPT, VUE, VUETIFY, VITE, AWS BEDROCK, RETRIEVAL AUGMENTED GENERATION (RAG), ' +
                'AWS CDK/CLOUDFORMATION, AWS COGNITO, AWS ROUTE-53, AWS CLOUDFRONT, AWS API-GATEWAY, AWS LAMBDA, AWS DYNAMO-DB, AWS S3, AWS SECRET MANAGER, AWS CERTIFICATION MANAGER...'
        },
        {
            time:'01/2024 - 06/2024',
            company:'Senior Developer & Architekt',
            companyDescr:'(Branche: Automobil & Fertigung)',
            description:[
                'Entwicklung mobiler Datenerfassungsanwendungen für Industrie-Handhelds (z.B. Zebra) bei ' +
                'einem international tätigen Premium-Automobilhersteller – mit Fokus auf Bauteilverwaltung und Kommissionierung in der Logistik- und Produktionsumgebung.'
            ],
            techStack:'JAVA, DOCKER, TEST-CONTAINER, POSTGRESQL, ORM, GRADLE, GIT, JWT, SPRING BOOT (SECURITY, WEB, DATA), ' +
                'JPA, PAYARA 5/6, JAKARTA EE 9/10, ANDROID, ZEBRA, VUE, VUETIFY, VITE, WEBPACK, JUNIT, MOCKITO'
        },
        {
            time:'01/2023 - 02/2024',
            company:'Senior Fullstack Developer',
            companyDescr:'(Branche: Gesundheitswesen)',
            description:[
                'Optimierung und Weiterentwicklung einer DevSecOps-orientierten Dokumentationsplattform für Arztpraxen ' +
                'und medizinische Einrichtungen unter Berücksichtigung höchster Securityanforderungen.'
            ],
            techStack:'JAVA 17/21, KOTLIN, INTELLIJ, GIT, JUNIT, MOCKITO, WIREMOCK, GRADLE, HELM, KUBERNETES, DOCKER, TESTCONTAINERS, AWS S3, LOCALSTACK, MINIO, ' +
                'SELENIUM, REACT, PRIME REACT, TAILWIND, CSS, VUE, VITE, DOM TESTING, E2E TESTS, SPRING BOOT 2/3, SPRING SECURITY, OAUTH, JPA, ORM, HIBERNATE, RENOVATE, ' +
                'REDIS, SONAR, BITBUCKET, JENKINS, GROOVY, VAULT, PROMETHEUS, GRAFANA, REST, RABBIT MQ, RESILIENT4J, ARCHUNIT, SAXON '
        },
        {
            time:'05/2021 - 12/2022',
            company:'Fullstack Cloud Developer',
            companyDescr:'(Branche: Energie und Versorgung)',
            description:[
                'Implementierung einer skalierbaren Helpdesk-Plattform auf Microsoft Azure für einen führenden deutschen Energiekonzern.'
            ],
            techStack:'SPRING BOOT, SPRING CLOUD, GIT, JAVA, GRADLE, JUNIT, TDD, SONAR, FINDBUGS, MS AZURE, RESILIENT4J,' +
                'MICROMETER, WIREMOCK, MONGO DB, DOCKER, TESTCONTAINER, SELENIUM, APACHE KAFKA, GRAFANA, INTELLIJ, SOAP, REST'
        },
        {
            time:'06/2017 - 04/2021',
            company:'Fullstack Developer',
            companyDescr:'(Branche: Gesundheitswesen)',
            description:[
                'Optimierung und Weiterentwicklung webbasierter Anwendungen wie Abrechnungssysteme und Mitgliederportale ' +
                'für medizinische Einrichtungen in Bayern und Baden-Württemberg.'
            ],
            techStack: 'JAVA, SPRING-BOOT, INTELLIJ, GUAVA, MAVEN, GRADLE, TEAM-CITY, CCD, TDD, CI/CD, GIT, VUE, WEBPACK, WICKET, ' +
                'FLYWAY, SELENIUM, RABBIT-MQ, CUCUMBER, GHERKIN, JUNIT, XML, XSD, XSLT, JUNIT 5, DOCKER, TESTCONTAINERS'
        },
        {
            time:'01/2016 - 06/2017',
            company:'Backend Developer',
            companyDescr:'(Branche: Finanzdienstleiter)',
            description:[
                'Weiterentwicklung von Bankanwendungen im Rahmen der regulatorischen Vorgaben unter strikter Aufsicht der BaFin.'
            ],
            techStack:'JAVA 6/7/8/9, ORACLE DB, SPRING, SOAP, REST, JENKINS, SONAR, JPA, SVN, VAADIN, XML, XSLT, MAVEN, SONAR'
        },
        {
            time:'05/2014 - 12/2015',
            company:'Agile Developer',
            companyDescr:'(Branche: Energie und Versorgung)',
            description:[
                'Konzeption und Entwicklung einer webbasierten Self-Service-Lösung zur automatisierten Abwicklung von Energie-Deals (Gas/Strom) für Geschäftskunden.'
            ],
            techStack:'APACHE TOMCAT, JAVA 6/7/8, SPRING, JPA, MAVEN, CI/CD, JUNIT, MOCKITO, AWS S3, JENKINS, FLYWAY, LOMBOK, APACHE WICKET, INTELLIJ, SVN'
        },

        {
            time:'06/2011 - 05/2014',
            company:'Fullstack Developer & Architekt',
            companyDescr:'(Branche: Flughafenbetrieb / Luftverkehrsinfrastruktur)',
            description:[
                'Konzeption und Umsetzung einer mobilen Kommunikationsplattform mit Echtzeit-Distribution zur ' +
                'Koordination von Ground-Handling-Prozessen an einem der größten Flughäfen Deutschlands.',
            ]
            ,
            techStack:'GLASSFISH, JSP, JSF, PRIMEFACE, JAVA SE, JAVA EE, JMS, ECLIPSE IDE, XML, XSLT, ' +
                'JUNIT, SOAP, CORBA, ZEBRA HANDHELD, JAVA SWING, JAVA AWT, WEBSOCKET, HTTP LONG POLLING, JQUERY, HTML, CSS'
        },

        {
            time:'01/2011 - 06/2011',
            company: 'Senior Backend Developer',
            companyDescr:'(Branche: Halbleiterindustrie / Mikrotechnologie)',
            description:[
                'Konzeption und Implementierung leistungsstarker, multithreaded Java-Services zur effizienten ' +
                'Übertragung und Verwaltung großer Volumina von Maskendaten (für die Herstellung von Chip-Masken).'
            ]
            ,
            techStack:'JAVA 6, ECLIPSE IDE, ACTIVEMQ, TOMCAT, SPRING MVC, SPRING CORE, UML, SVN, LOG4J, JUNIT, ORACLE-DB, JAVA CONCURRENT'
        },

        {
            time:'03/2010 - 12/2010',
            company:'Software-Entwickler',
            companyDescr:'(Branche: Telekommunikation & Internet-Service-Provider)',
            description:[
                'Aufbau und Entwicklung eines leistungsfähigen E-Mail-Dienstes für den Massenmarkt im Bereich Mail- und Webhosting bei einem der führenden Internetanbieter Deutschlands.'
            ]
            ,
            techStack:'JAVA, TOMCAT, HUDSON, SVN, SPRING, REST, SOAP, ECLIPSE, SQL, XML, XSLT, JUNIT, LOG4J, ' +
                'JAX-RS, JMS, QUARZT, JMETER, JMX, MOCKITO, POWERMOCK, SELENIUM, SONAR, PRIMEFACE, UNIX, SHELL'
        },

        {
            time:'03/2009 - 12/2009',
            company:'Java Entwickler',
            companyDescr:'(Branche: Telekommunikation)',
            description:[
                'Entwicklung und Customizing einer Ringbacktone-(RBT)-Anwendung für den internationalen Massenmarkt. ' +
                'In diesem Rahmen wurden maßgeschneiderte RBT-Lösungen erfolgreich an Etisalat (Ägypten), AT&T (USA), Rogers (Kanada) und Vodafone ausgeliefert.'
            ]
            ,
            techStack:'JAVA, SVN, APACHE TOMCAT, APACHE TILES, SPRING WS, SPRING MVC, UNIX, SHELL, ' +
                'XFIRE, CXF, XML, SOAP, JUNIT, ANT, HUDSON, TDD, LOG4J, STRUST, CHECKSTYLE, RESTFULL, AJAX, HTTP'
        },

        {
            time:'09/2006 - 12/2008',
            company:'Software-Entwickler & Teilprojektleiter',
            companyDescr:'(Branche: Telekommunikation)',
            description:[
                'Entwicklung verschiedener Produkte innerhalb des Order Management Systems (OMS) eines führenden Schweizer Telco-Konzern.'
            ],
            techStack:'IBM WEBSPHERE, JAVA ENTERPRISE (J2EE), CVS, SVN, ECLIPSE, JAVA, JSP, JSF, EJB, ' +
                'MAVEN, JUNIT, ORACLE, XML, XSLT, SOAP, JMX, SPRING, HIBERNATE, EASYMOCK, TDD, SOA, UNIX, SHELL '
        },

        {
            time:'02/2005 - 08/2006',
            company:'Software-Entwickler',
            companyDescr:'(Branche: Logistik)',
            description:[
                'Entwicklung einer PL/SQL-basierten Software zur Optimierung von Zustellrouten für Brief- und Paketboten bei Deutschlands größtem Post- und Logistikdienstleister.'
            ],
            techStack:'ORACLE, PL-SQL, PLAN UML, CVS, PERL, RUBY, UNIX, SHELL, JAVA'
        }
    ];

    $scope.references = [
        {
            title:'Projectmanager, telecommunications service provider',
            details:'"[...]I can give him the highest possible recommendation to any future employer. ' +
            'He is a team player and a great person. [...]"'
        },
        {
            title:'Domainverantwortlichen, führendes Schweizer Telco-Unternehmen',
            details:'"[...] er besitzt ein umfassendes und hervorragendes Fachwissen, ' +
            'mit dessen Hilfe er auch überaus schwierige Fragen sehr erfolgreich löste.[...]"'
        },
        {
            title:'Referenz durch einen Internet-Provider',
            details:'"[...] Auch in herausfordernden Situationen bewahrte er stets den Überblick und traf verantwortungsvolle Entscheidungen. [...]"'
        },
        {
            title:'Referenz von einem Logistikunternehmen',
            details:'"[...] Die Zusammenarbeit mit ihm war nicht nur effektiv, sondern auch richtig angenehm – fachlich top und menschlich super. [...]"'
        },
    ];

    $scope.print = function(){
        window.setTimeout(function(){window.print(); }, 1000);
    }

}).directive('printContact', function(){
    return{
        restrict: 'AEC',
        template: $('.printContactTemplate').prop('outerHTML').replace('hidden','')
    };
});


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

    $scope.coreCompetencies = 'Java/Kotlin-, Spring, K8S, AWS';

    $scope.certs = [
        'Diplom-Wirtschaftsinformatiker (FH) -  Final thesis graded “very good” (1.0 / highest)',
        'AWS Certified Solutions Architect - Associate',
        'AWS Certified Developer - Associate',
        'AWS Certified AI Practitioner',
    ];

    $scope.technologies = [
        {
            category: 'Java & Ecosystem',
            description: 'Kotlin, Java 8/11/17/21, Quarkus, Spring, Jakarta EE'
        },

        {
            category: 'Frontend Ecosystem',
            description: 'Typescript, npm, Vite, React, Vue'
        },

        {
            category: 'Cloud & Containers',
            description: 'AWS, Azure, Docker, Kubernetes, helm'
        },

        {
            category: 'Database & Tools',
            description: 'Oracle, PLSQL, MongoDB, Milvus, Pinecone, Postgres, SQL, Liquibase'
        },

        {
            category: 'Testing',
            description: 'unit, integration, e2e, testcontainers, vitest, selenium, SonarQube'
        },

        {
            category: 'DevOps',
            description: 'Jenkins, Linux, Shell, Prometheus, Grafana, Maven, Gradle, Git'
        },
    ]

    $scope.projects = [
        {
            time:'Since 03/2025',
            company:'Senior Fullstack Developer',
            companyDescr:'(Sector: Healthcare)',
            description:[
                'Design and development of web applications supporting quality assurance and billing processes for healthcare providers.'
            ],
            techStack:'KOTLIN, JAVA, GRADLE, HELM, KUBERNETES, K9S, DOCKER, TESTCONTAINERS, S3, ' +
                'SELENIUM, REACT, PRIME REACT, TAILWIND, CSS, VUE, VITE, DOM TESTING, E2E TESTS, SPRING BOOT, INTELLIJ, GIT, JUNIT, MOCKITO, WIREMOCK, ' +
                'SPRING SECURITY, OAUTH, JPA, ORM, HIBERNATE, RENOVATE, REDIS, SONAR, BITBUCKET, JENKINS, GROOVY, MINIO, ' +
                'VAULT, PROMETHEUS, GRAFANA, REST, RABBIT MQ, RESILIENT4J, ARCHUNIT, XML ENCRYPTION, LOCALSTACK '
        },
        {
            time:'09/2024 - 03/2025',
            company: 'Cloud Developer & Architect',
            companyDescr:'(Sector: Energy and supply)',
            description:[
                'Design and development of a scalable sales portal based on the AWS serverless stack ' +
                'with integrated generative AI - designed for high scalability and cost efficiency.'
            ],
            techStack:'QUARKUS NATIVE, MAVEN, GIT, GITHUB ACTIONS, KOTLIN, TYPESCRIPT, VUE, VUETIFY, VITE, AWS BEDROCK, RETRIEVAL AUGMENTED GENERATION (RAG), ' +
                'AWS CDK/CLOUDFORMATION, AWS COGNITO, AWS ROUTE-53, AWS CLOUDFRONT, AWS API-GATEWAY, AWS LAMBDA, AWS DYNAMO-DB, AWS S3, AWS SECRET MANAGER, AWS CERTIFICATION MANAGER...'
        },
        {
            time:'01/2024 - 06/2024',
            company:'Senior Developer & Architect',
            companyDescr:'(Sector: Automotive & Manufacturing)',
            description:[
                'Development of mobile data capture applications for industrial handhelds (e.g. Zebra) at ' +
                'an internationally active premium automobile manufacturer - with a focus on component management and order picking in the logistics and production environment.'
            ],
            techStack:'JAVA, DOCKER, TEST-CONTAINER, POSTGRESQL, ORM, GRADLE, GIT, JWT, SPRING BOOT (SECURITY, WEB, DATA), ' +
                'JPA, PAYARA 5/6, JAKARTA EE 9/10, ANDROID, ZEBRA, VUE, VUETIFY, VITE, WEBPACK, JUNIT, MOCKITO'
        },
        {
            time: '01/2023 - 02/2024',
            company:'Senior Fullstack Developer',
            companyDescr:'(Sector: Healthcare)',
            description: [
                'Optimization and further development of a DevSecOps-oriented documentation platform ' +
                'for medical practices and medical facilities, taking into account the highest security requirements.'
            ],
            techStack:'JAVA 17/21, KOTLIN, INTELLIJ, GIT, JUNIT, MOCKITO, WIREMOCK, GRADLE, HELM, KUBERNETES, DOCKER, TESTCONTAINERS, AWS S3, LOCALSTACK, MINIO, ' +
                'SELENIUM, REACT, PRIME REACT, TAILWIND, CSS, VUE, VITE, DOM TESTING, E2E TESTS, SPRING BOOT 2/3, SPRING SECURITY, OAUTH, JPA, ORM, HIBERNATE, RENOVATE, ' +
                'REDIS, SONAR, BITBUCKET, JENKINS, GROOVY, VAULT, PROMETHEUS, GRAFANA, REST, RABBIT MQ, RESILIENT4J, ARCHUNIT, SAXON '
        },
        {
            time: '05/2021 - 12/2022',
            company:'Fullstack Cloud Developer',
            companyDescr:'(Sector: Energy and supply)',
            description: [
                'Implementation of a scalable helpdesk platform on Microsoft Azure for a leading German energy company.'
            ],
            techStack:'SPRING BOOT, SPRING CLOUD, GIT, JAVA, GRADLE, JUNIT, TDD, SONAR, FINDBUGS, MS AZURE, RESILIENT4J,' +
                'MICROMETER, WIREMOCK, MONGO DB, DOCKER, TESTCONTAINER, SELENIUM, APACHE KAFKA, GRAFANA, INTELLIJ, SOAP, REST'
        },
        {
            time: '06/2017 - 04/2021',
            company:'Fullstack Developer',
            companyDescr:'(Sector: Healthcare)',
            description: [
                'Optimization and further development of web-based applications such as billing systems and member portals ' +
                'for medical facilities in Germany (Bavaria and Baden-Württemberg).'
            ],
            techStack: 'JAVA, SPRING-BOOT, INTELLIJ, GUAVA, MAVEN, GRADLE, TEAM-CITY, CCD, TDD, CI/CD, GIT, VUE, WEBPACK, WICKET, ' +
                'FLYWAY, SELENIUM, RABBIT-MQ, CUCUMBER, GHERKIN, JUNIT, XML, XSD, XSLT, JUNIT 5, DOCKER, TESTCONTAINERS'
        },
        {
            time: '01/2016 - 06/2017',
            company:'Backend Developer',
            companyDescr:'(Sector: Financial services)',
            description: [
                'Further development of banking applications in line with regulatory requirements under the strict supervision of BaFin.'
            ],
            techStack:'JAVA 6/7/8/9, ORACLE DB, SPRING, SOAP, REST, JENKINS, SONAR, JPA, SVN, VAADIN, XML, XSLT, MAVEN, SONAR'
        },
        {
            time: '05/2014 - 12/2015',
            company:'Agile Developer',
            companyDescr:'(Sector: Energy and supply)',
            description: [
                'Design and development of a web-based self-service solution for the automated processing of energy deals (gas/electricity) for business customers.'
            ],
            techStack:'APACHE TOMCAT, JAVA 6/7/8, SPRING, JPA, MAVEN, CI/CD, JUNIT, MOCKITO, AWS S3, JENKINS, FLYWAY, LOMBOK, APACHE WICKET, INTELLIJ, SVN'
        },

        {
            time: '06/2011 - 05/2014',
            company:'Fullstack Developer & Architect',
            companyDescr: '(Sector: Airport operations)',
            description: [
                'Design and implementation of a mobile communication platform with real-time distribution for the coordination of ground handling processes at one of Germany\'s largest airports.',
            ]
            ,
            techStack:'GLASSFISH, JSP, JSF, PRIMEFACE, JAVA SE, JAVA EE, JMS, ECLIPSE IDE, XML, XSLT, ' +
                'JUNIT, SOAP, CORBA, ZEBRA HANDHELD, JAVA SWING, JAVA AWT, WEBSOCKET, HTTP LONG POLLING, JQUERY, HTML, CSS'
        },

        {
            time: '01/2011 - 06/2011',
            company:'Senior Backend Developer',
            companyDescr: '(Sector: Semiconductor industry / Microtechnology)',
            description: [
                'Design and implementation of high-performance, multi-threaded Java services for the efficient transfer ' +
                'and management of large volumes of mask data (for the production of chip masks).'
            ]
            ,
            techStack:'JAVA 6, ECLIPSE IDE, ACTIVEMQ, TOMCAT, SPRING MVC, SPRING CORE, UML, SVN, LOG4J, JUNIT, ORACLE-DB, JAVA CONCURRENT'
        },

        {
            time: '03/2010 - 12/2010',
            company:'Java-Developer',
            companyDescr: '(Sector: Telecommunications & Internet Service Providers)',
            description: [
                'Establishment and development of a high-performance e-mail service for the mass market in the mail ' +
                'and web hosting sector at one of Germany\'s leading Internet providers.'
            ]
            ,
            techStack:'JAVA, TOMCAT, HUDSON, SVN, SPRING, REST, SOAP, ECLIPSE, SQL, XML, XSLT, JUNIT, LOG4J, ' +
                'JAX-RS, JMS, QUARZT, JMETER, JMX, MOCKITO, POWERMOCK, SELENIUM, SONAR, PRIMEFACE, UNIX, SHELL'
        },

        {
            time: '03/2009 - 12/2009',
            company:'Java-Developer',
            companyDescr:'(Sector: Telecommunications)',
            description: [
                'Development and customizing of a ring back tone (RBT) application for the international mass market. ' +
                'In this context, customized RBT solutions were successfully delivered to Etisalat (Egypt), AT&T (USA), ' +
                'Rogers (Canada) and Vodafone.'
            ]
            ,
            techStack:'JAVA, SVN, APACHE TOMCAT, APACHE TILES, SPRING WS, SPRING MVC, UNIX, SHELL, ' +
                'XFIRE, CXF, XML, SOAP, JUNIT, ANT, HUDSON, TDD, LOG4J, STRUST, CHECKSTYLE, RESTFULL, AJAX, HTTP'
        },

        {
            time: '09/2006 - 12/2008',
            company: 'Software developer & subproject manager',
            companyDescr:'(Sector: Telecommunications)',
            description: [
                'Development of various products within the Order Management System (OMS) of a leading Swiss telco group.'
            ],
            techStack:'IBM WEBSPHERE, JAVA ENTERPRISE (J2EE), CVS, SVN, ECLIPSE, JAVA, JSP, JSF, EJB, ' +
                'MAVEN, JUNIT, ORACLE, XML, XSLT, SOAP, JMX, SPRING, HIBERNATE, EASYMOCK, TDD, SOA, UNIX, SHELL '
        },

        {
            time: '02/2005 - 08/2006',
            company: 'Software developer',
            companyDescr:'(Sector: Logistic)',
            description: [
                'Development of PL/SQL-based software to optimize delivery routes for letter and parcel carriers ' +
                'at Germany\'s largest postal and logistics service provider.'
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


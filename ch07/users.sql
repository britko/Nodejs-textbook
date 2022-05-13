CREATE TABLE nodejs.users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT UNSIGNED NOT NULL,
    married TINYINT NOT NULL,
    comment TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    UNIQUE INDEX name_UNIQUE (name ASC)
)
COMMENT = '사용자 정보'
DEFAULT CHARACTER SET = utf8
ENGINE = InnoDB;

INSERT INTO nodejs.users (name, age, married, comment) VALUES ('zero', 24, 0, '자기소개1');
INSERT INTO nodejs.users (name, age, married, comment) VALUES ('nero', 32, 1, '자기소개2');
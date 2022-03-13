---
sidebar: auto
---

<h1 align='center'>oracle和mysql一些基本sql语句的区别</h1>
<div align='center'>post date: 2020-09-08</div>


oracle中用"模式名.表名"，相当于mysql中的"数据库名.表名"。
## 1 单引号、双引号、反引号
mysql中可以使用单引号、双引号、反引号，如果表名或字段名可能与系统关键字相同，为了避免歧义，需要用反引号标识。

oracle中不能使用反引号标识表名或字段名。可以使用单引号或双引号，当使用双引号时，则严格区分大小写，否则oracl都默认转换为大写。 

## 2 创建表
mysql：

```sql
CREATE TABLE database_name.`table_name` (姓名 varchar(255),年龄 int(255),日期 datetime)
```
oracle:

```sql
CREATE TABLE schema_name."table_name" (姓名 varchar(255),年龄 number,日期 date)
```

## 3 删除表
如果表存在则删除该表。
mysql：

```sql
DROP TABLE IF EXISTS database_name.`table_name`
```
oracle中没有DROP TABLE IF EXISTS，只能间接实现
```sql
BEGIN
	EXECUTE IMMEDIATE 'DROP TABLE schema_name."table_name"';
	EXCEPTION WHEN OTHERS THEN NULL;
END;
```
## 4 添加字段和注释
mysql：

```sql
ALTER TABLE database_name.`table_name` ADD new_fields int comment '注释'
```
oracle：

```sql
ALTER TABLE schema_name."table_name" ADD "new_fields" number;
-- 给表添加注释
COMMENT ON TABLE schema_name."table_name" IS '表注释';
-- 给字段添加注释
COMMENT ON COLUMN schema_name."table_name"."姓名" IS '字段注释';
```

## 5 删除字段
mysql：

```sql
ALTER TABLE database_name.`table_name` DROP COLUMN 年龄
```
oracle：

```sql
-- 以下两种都可以
ALTER TABLE schema_name."table_name" DROP(年龄);
ALTER TABLE schema_name."table_name" DROP COLUMN "年龄";
```
## 6 修改字段名
mysql：

```sql
ALTER TABLE database_name.`table_name` CHANGE COLUMN old_name new_name varchar(255)
```
oracle:

```sql
ALTER TABLE schema_name."table_name" rename column "old_name" to "new_name"
```
## 7 修改字段类型
mysql：
```sql
ALTER TABLE database_name.`table_name` MODIFY COLUMN `年龄` VARCHAR(10)
```
oracle：
当表为空时，可以直接修改字段类型

```sql
ALTER TABLE schema_name."table_name" MODIFY ("年龄" varchar2(10))
```
如果表不为空，只能间接修改字段类型：修改原字段名，新增目标类型的字段，复制原字段值，删除原字段

```sql
ALTER TABLE schema_name."table_name" rename column "年龄" to "tmp_name";
ALTER TABLE schema_name."table_name" add "年龄" varchar2(10);
UPDATE schema_name."table_name" SET "年龄"=TRIM("tmp_name");
ALTER TABLE schema_name."table_name" DROP("tmp_name");
```
## 8 增删改查
### 增
mysql：
```sql
INSERT INTO database_name.`table_name` VALUES ('A', 14, '2017-11-15 00:00:00')
```
oracle：

```sql
INSERT INTO schema_name."table_name" VALUES ('A', 14, to_date('2017-11-15 00:00:00' , 'yyyy-mm-dd hh24:mi:ss'))
```
### 删
mysql：

```sql
DELETE FROM database_name.`table_name` WHERE `年龄`=5
```
oracle：
```sql
DELETE FROM schema_name."table_name" WHERE "年龄"=5
```
### 改
mysql:
```sql
UPDATE database_name.`table_name` SET `姓名`="B" WHERE `姓名`="A"
```

oracle：
```sql
UPDATE schema_name."table_name" SET "姓名"="B" WHERE "姓名"="A"
```
### 查
mysql：
```sql
SELECT * FROM database_name.`table_name`
```
oracle：

```sql
SELECT * FROM schema_name."table_name"
```
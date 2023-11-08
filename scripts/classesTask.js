// Classe Lista de Tarefas
class TaskList {
    constructor() {
      this._list = [];
    };

    getList() { return this._list; };
    
    addTask(task) { this._list.push(task); };

    removeTask(task) { this._list(this._list.indexOf(task), 1); };
};

// Classe Tarefa
class Task {
    constructor(title, description) {
      this._title = title;
      this._description = description;
      this._completed = false;
      this._id = undefined;
      this._classType = undefined;
    };

    completedTask() { this._completed = true; };
    unCompletedTask() { this._completed = false; };
    getCompleted() { return this._completed; };

    getId() { return this._id; };
    setId(idValue) { this._id = idValue; };

    getClassType() { return this._classType; };
    setClassType(className) { this._classType = className; };

    getTitle() { return this._title; };
    setTitle(title) { this._title = title; }

    getDescription() { return this._description;};
    setDescription(description) { this._description = description; };
};

// Classe Prioridade da tarefa
class PriorityTask extends Task {
    constructor(title, description, priorityLevel, deadline) {
        super(title, description);
        this._priorityLevel = priorityLevel;
        this._deadline = deadline;
    };

    getPriority() { return this._priorityLevel; };
    setPriority(priority) { this._priorityLevel = priority; }; 

    getDeadline() { return this._deadline; };
    setDeadline(deadline) { this._deadline = deadline; };
};

// Classe tarefa repetitiva
class RepetitiveTask extends Task {
    constructor(title, description, frequency, startDate) {
        super(title, description);
        this._frequency = frequency;
        this._startDate = startDate;
    };

    getFrequency() { return this._frequency; };
    setFrequency(frequency) { this._frequency = frequency; };

    getStartDate() { return this._startDate; };
    setStartDate(startDate) { this._startDate = startDate; };
};

// Classe da lista de Tags associada a uma tarefa
class TagsTask extends Task {
    constructor(title, description) {
        super(title, description);
        this._tagsList = []
    };

    addTag(tag) { this._tagsList.push(tag) };

    getTagList() { return this._tagsList; }
};

// Classe Prioridade e tags juntas
class Priority_Tags extends PriorityTask {
    constructor (title, description, priorityLevel, deadline) {
        super(title, description, priorityLevel, deadline);
        this._tagsList = []
    }

    addTag(tag) { this._tagsList.push(tag) };
}

// Classe Prioridade e Repetitive juntas
class Priority_Repetitive extends PriorityTask {
    constructor(title, description, priorityLevel, deadline, frequency, startDate) {
        super(title, description, priorityLevel, deadline);
        this._frequency = frequency;
        this._startDate = startDate;
    }

    getFrequency() { return this._frequency; };
    setFrequency(frequency) { this._frequency = frequency; };

    getStartDate() { return this._startDate; };
    setStartDate(startDate) { this._startDate = startDate; };
}

// Classe Tags e Repetitive juntas
class Repetitive_Tags extends RepetitiveTask {
    constructor(title, description, frequency, startDate) {
        super(title, description, frequency, startDate);
        this._tagsList = []
    };

    addTag(tag) { this._tagsList.push(tag) };
}

class AllTask extends Priority_Repetitive {
    constructor(text, description, priorityLevel, deadline, frequency, startDate) {
        super(text, description, priorityLevel, deadline, frequency, startDate);
        this._tagsList = []
    };

    addTag(tag) { this._tagsList.push(tag) };
};

export { 
    TaskList, 
    Task, 
    PriorityTask, 
    RepetitiveTask, 
    TagsTask, 
    Priority_Tags, 
    Priority_Repetitive, 
    Repetitive_Tags,
    AllTask
};